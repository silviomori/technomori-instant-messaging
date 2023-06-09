package com.technomori.instantmessagingsse.services;

import java.security.Principal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;
import com.technomori.instantmessagingsse.entities.Chat;
import com.technomori.instantmessagingsse.entities.Message;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.ChatRepository;
import com.technomori.instantmessagingsse.repositories.MessageRepository;
import com.technomori.instantmessagingsse.services.beans.EmittersToChat;
import com.technomori.instantmessagingsse.services.util.MessageUtil;
import com.technomori.instantmessagingsse.services.util.UserUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final JmsTemplate jmsTemplate;
    private final EmittersToChat emittersToChat;

    private final MessageRepository msgRepo;
    private final ChatRepository chatRepo;
    private final UserUtil userUtil;

    @Override
    public Long insert(MessageInsertDTO message, Principal principal) {
        User user = userUtil.getAuthenticatedUser(principal);
        Chat chat = chatRepo.getReferenceById(message.getChatId());

        Message msg = msgRepo.saveAndFlush(
                Message.builder()
                        .chat(chat)
                        .user(user)
                        .text(message.getText())
                        .sentAt(LocalDate.now())
                        .build());
        MessageDTO messageDTO = MessageUtil.getMessageDTO(msg);

        jmsTemplate.convertAndSend("broadcast", messageDTO);

        return msg.getId();
    }

    private void registerEmitter(Long chatId, SseEmitter emitter) {
        final List<SseEmitter> emitters = emittersToChat.getOrDefault(chatId,
                new CopyOnWriteArrayList<>());
        if (emitters.size() == 0) {
            emittersToChat.put(chatId, emitters);
        }
        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onTimeout(() -> emitters.remove(emitter));
    }

    @Override
    public SseEmitter registerEmitter(Long[] chatIds) {
        final SseEmitter emitter = new SseEmitter(-1L);
        Arrays.stream(chatIds).forEach(chatId -> registerEmitter(chatId, emitter));
        return emitter;
    }

}

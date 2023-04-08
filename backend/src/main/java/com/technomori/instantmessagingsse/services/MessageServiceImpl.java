package com.technomori.instantmessagingsse.services;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;
import com.technomori.instantmessagingsse.entities.Chat;
import com.technomori.instantmessagingsse.entities.Message;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.ChatRepository;
import com.technomori.instantmessagingsse.repositories.MessageRepository;
import com.technomori.instantmessagingsse.repositories.UserRepository;
import com.technomori.instantmessagingsse.services.beans.EmittersToChat;
import com.technomori.instantmessagingsse.services.util.MessageUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final EmittersToChat emittersToChat;

    private final MessageRepository msgRepo;
    private final UserRepository userRepo;
    private final ChatRepository chatRepo;

    @Override
    public Long insert(MessageInsertDTO message) {
        User user = userRepo.getReferenceById(message.getUserId());
        Chat chat = chatRepo.getReferenceById(message.getChatId());

        Message msg = msgRepo.saveAndFlush(
                Message.builder()
                        .chat(chat)
                        .user(user)
                        .text(message.getText())
                        .sentAt(LocalDate.now())
                        .build());
        MessageDTO messageDTO = MessageUtil.getMessageDTO(msg);

        sendMessageToAllClients(messageDTO);

        return msg.getId();
    }

    private void sendMessageToAllClients(MessageDTO message) {
        List<SseEmitter> emitters = emittersToChat.get(message.getChatId());
        if (emitters == null) {
            return;
        }

        List<SseEmitter> deadEmitters = new ArrayList<>();

        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(message);
            } catch (IOException e) {
                deadEmitters.add(emitter);
            }
        }

        emitters.removeAll(deadEmitters);
    }

    @Override
    public SseEmitter registerEmitter(Long chatId) {
        SseEmitter emitter = new SseEmitter(-1L);
        final List<SseEmitter> emitters = emittersToChat.getOrDefault(chatId,
                new CopyOnWriteArrayList<>());
        if (emitters.size() == 0) {
            emittersToChat.put(chatId, emitters);
        }
        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onTimeout(() -> emitters.remove(emitter));
        return emitter;
    }

}

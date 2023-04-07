package com.technomori.instantmessagingsse.services;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;
import com.technomori.instantmessagingsse.entities.Chat;
import com.technomori.instantmessagingsse.entities.Message;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.ChatRepository;
import com.technomori.instantmessagingsse.repositories.MessageRepository;
import com.technomori.instantmessagingsse.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

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

        return msg.getId();
    }

}

package com.technomori.instantmessagingsse.services.util;

import java.util.List;
import java.util.stream.Collectors;

import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.entities.Message;

public class MessageUtil {

    public static MessageDTO getMessageDTO(Message msg) {
        return MessageDTO.builder()
                .id(msg.getId())
                .chatId(msg.getChat().getId())
                .sentAt(msg.getSentAt())
                .user(UserUtil.getUserProfileDTO(msg.getUser()))
                .text(msg.getText())
                .build();
    }

    public static List<MessageDTO> getMessagesDTOs(List<Message> messages) {
        return messages.stream()
                .map(msg -> getMessageDTO(msg))
                .collect(Collectors.toList());
    }

}

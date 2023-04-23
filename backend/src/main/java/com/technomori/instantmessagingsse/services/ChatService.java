package com.technomori.instantmessagingsse.services;

import java.security.Principal;
import java.util.List;

import com.technomori.instantmessagingsse.dtos.ChatDTO;
import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;
import com.technomori.instantmessagingsse.dtos.MessageDTO;

public interface ChatService {

    List<ChatDescriptionDTO> findAll(Principal principal);

    ChatDTO findById(Long id);

    MessageDTO getChatLatestMessage(Long id);

}

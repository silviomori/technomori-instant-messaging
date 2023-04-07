package com.technomori.instantmessagingsse.services;

import java.util.List;

import com.technomori.instantmessagingsse.dtos.ChatDTO;
import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;

public interface ChatService {

    List<ChatDescriptionDTO> findAll();

    ChatDTO findById(Long id);

}

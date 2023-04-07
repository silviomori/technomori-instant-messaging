package com.technomori.instantmessagingsse.services;

import java.util.List;

import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;

public interface ChatService {

    public List<ChatDescriptionDTO> findAll();

}

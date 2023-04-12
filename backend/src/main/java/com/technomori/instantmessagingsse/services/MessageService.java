package com.technomori.instantmessagingsse.services;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;

public interface MessageService {

    Long insert(MessageInsertDTO message);

    SseEmitter registerEmitter(Long[] chatIds);

}

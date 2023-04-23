package com.technomori.instantmessagingsse.services;

import java.security.Principal;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;

public interface MessageService {

    Long insert(MessageInsertDTO message, Principal principal);

    SseEmitter registerEmitter(Long[] chatIds);

}

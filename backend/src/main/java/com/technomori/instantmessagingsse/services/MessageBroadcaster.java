package com.technomori.instantmessagingsse.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.services.beans.EmittersToChat;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class MessageBroadcaster {

    private final EmittersToChat emittersToChat;

    @JmsListener(destination = "broadcast")
    private void sendMessageToAllClients(MessageDTO message) {
        List<SseEmitter> emitters = emittersToChat.get(message.getChatId());
        if (emitters == null) {
            return;
        }

        List<SseEmitter> deadEmitters = new ArrayList<>();

        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(message);
            } catch (IOException | IllegalStateException e) {
                deadEmitters.add(emitter);
            }
        }

        emitters.removeAll(deadEmitters);
    }

}

package com.technomori.instantmessagingsse.controllers;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;
import com.technomori.instantmessagingsse.services.MessageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/messages")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService service;

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody MessageInsertDTO message) {
        Long id = service.insert(message);
        URI uri = URI.create("/messages/" + id);
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/stream")
    public SseEmitter stream(@RequestParam Long[] chatIds) {
        return service.registerEmitter(chatIds);
    }

}

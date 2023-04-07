package com.technomori.instantmessagingsse.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;
import com.technomori.instantmessagingsse.services.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/chats")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService service;

    @GetMapping
    public ResponseEntity<List<ChatDescriptionDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

}

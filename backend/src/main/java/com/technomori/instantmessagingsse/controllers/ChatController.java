package com.technomori.instantmessagingsse.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technomori.instantmessagingsse.dtos.ChatDTO;
import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;
import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.services.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/chats")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService service;

    @GetMapping
    public ResponseEntity<List<ChatDescriptionDTO>> findAll(Principal principal) {
        return ResponseEntity.ok(service.findAll(principal));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChatDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/{id}/latest")
    public ResponseEntity<MessageDTO> getChatLatestMessage(@PathVariable Long id) {
        return ResponseEntity.ok(service.getChatLatestMessage(id));
    }

}

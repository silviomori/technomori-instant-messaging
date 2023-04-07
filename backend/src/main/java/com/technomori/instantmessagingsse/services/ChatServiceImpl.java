package com.technomori.instantmessagingsse.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;
import com.technomori.instantmessagingsse.dtos.UserProfileDTO;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.ChatRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ChatRepository repo;

    public List<ChatDescriptionDTO> findAll() {
        return repo.findAll().stream()
                .map(chat -> ChatDescriptionDTO.builder()
                        .id(chat.getId())
                        .name(chat.getName())
                        .purpose(chat.getPurpose())
                        .openToPublic(chat.getOpenToPublic())
                        .owner(getUserProfileDTO(chat.getOwner()))
                        .users(chat.getUsers().stream()
                                .map(user -> getUserProfileDTO(user))
                                .collect(Collectors.toList()))
                        .build())
                .toList();
    }

    private UserProfileDTO getUserProfileDTO(User user) {
        return UserProfileDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .name(user.getName())
                .email(user.getEmail())
                .location(user.getLocation())
                .phone(user.getPhone())
                .profileImgUrl(user.getProfileImgUrl())
                .build();
    }

}

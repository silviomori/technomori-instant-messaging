package com.technomori.instantmessagingsse.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;
import com.technomori.instantmessagingsse.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    public List<UserProfileDTO> findAll() {
        return repo.findAll().stream()
                .map(user -> UserProfileDTO.builder()
                        .id(user.getId())
                        .username(user.getUsername())
                        .name(user.getName())
                        .email(user.getEmail())
                        .location(user.getLocation())
                        .phone(user.getPhone())
                        .profileImgUrl(user.getProfileImgUrl())
                        .build())
                .toList();
    }

}

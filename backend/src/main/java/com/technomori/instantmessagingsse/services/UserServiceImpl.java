package com.technomori.instantmessagingsse.services;

import java.security.Principal;
import java.util.List;

import org.springframework.stereotype.Service;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.UserRepository;
import com.technomori.instantmessagingsse.services.util.UserUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;
    private final UserUtil userUtil;

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

    @Override
    public UserProfileDTO findAuthenticated(Principal principal) {
        User user = userUtil.getAuthenticatedUser(principal);
        return UserUtil.getUserProfileDTO(user);
    }

}

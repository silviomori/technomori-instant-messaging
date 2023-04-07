package com.technomori.instantmessagingsse.services.util;

import java.util.List;
import java.util.stream.Collectors;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;
import com.technomori.instantmessagingsse.entities.User;

public class UserUtil {

    public static UserProfileDTO getUserProfileDTO(User user) {
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

    public static List<UserProfileDTO> getUserProfileDTOs(List<User> users) {
        return users.stream()
                .map(user -> getUserProfileDTO(user))
                .collect(Collectors.toList());
    }
}

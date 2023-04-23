package com.technomori.instantmessagingsse.services.util;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.UserRepository;

@Component
public class UserUtil {

    @Value("${auth0.claim.user_email}")
    private String claimUserEmail;

    @Autowired
    private UserRepository userRepo;

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

    public User getAuthenticatedUser(Principal principal) {
        JwtAuthenticationToken token = (JwtAuthenticationToken) principal;
        String userEmail = token.getToken().getClaim(claimUserEmail);
        List<User> users = userRepo.findByEmail(userEmail);
        return users.get(0);
    }

}

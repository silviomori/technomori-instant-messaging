package com.technomori.instantmessagingsse.services;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;

import com.technomori.instantmessagingsse.dtos.ChatDTO;
import com.technomori.instantmessagingsse.dtos.ChatDescriptionDTO;
import com.technomori.instantmessagingsse.dtos.MessageDTO;
import com.technomori.instantmessagingsse.entities.Chat;
import com.technomori.instantmessagingsse.entities.User;
import com.technomori.instantmessagingsse.repositories.ChatRepository;
import com.technomori.instantmessagingsse.repositories.UserRepository;
import com.technomori.instantmessagingsse.services.util.MessageUtil;
import com.technomori.instantmessagingsse.services.util.UserUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    @Value("${auth0.claim.user_email}")
    private String claimUserEmail;

    private final ChatRepository repo;
    private final UserRepository userRepo;

    @Override
    public List<ChatDescriptionDTO> findAll(Principal principal) {
        JwtAuthenticationToken token = (JwtAuthenticationToken) principal;
        String userEmail = token.getToken().getClaim(claimUserEmail);
        List<User> users = userRepo.findByEmail(userEmail);
        return users.get(0).getChats().stream()
                .map(chat -> ChatDescriptionDTO.builder()
                        .id(chat.getId())
                        .name(chat.getName())
                        .purpose(chat.getPurpose())
                        .openToPublic(chat.getOpenToPublic())
                        .owner(UserUtil.getUserProfileDTO(chat.getOwner()))
                        .users(chat.getUsers().stream()
                                .map(user -> UserUtil.getUserProfileDTO(user))
                                .collect(Collectors.toList()))
                        .latestMessage(
                                MessageUtil.getMessageDTO(chat.getMessages()
                                        .get(chat.getMessages().size() - 1)))
                        .build())
                .toList();
    }

    @Override
    public ChatDTO findById(Long id) {
        Chat chat = repo.findById(id).get();
        return ChatDTO.builder()
                .id(chat.getId())
                .name(chat.getName())
                .purpose(chat.getPurpose())
                .openToPublic(chat.getOpenToPublic())
                .owner(UserUtil.getUserProfileDTO(chat.getOwner()))
                .users(UserUtil.getUserProfileDTOs(chat.getUsers()))
                .messages(MessageUtil.getMessagesDTOs(chat.getMessages()))
                .build();
    }

    @Override
    public MessageDTO getChatLatestMessage(Long id) {
        // TODO: Refactor
        List<MessageDTO> messages = findById(id).getMessages();
        return messages.get(messages.size() - 1);
    }

}

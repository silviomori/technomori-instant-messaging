package com.technomori.instantmessagingsse.dtos;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatDescriptionDTO {

    private Long id;
    private UserProfileDTO owner;
    private String name;
    private String purpose;
    private Boolean openToPublic;
    private List<UserProfileDTO> users;

}

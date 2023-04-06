package com.technomori.instantmessagingsse.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileDTO {

    private Long id;
    private String username;
    private String name;
    private String email;
    private String location;
    private String phone;
    private String profileImgUrl;

}

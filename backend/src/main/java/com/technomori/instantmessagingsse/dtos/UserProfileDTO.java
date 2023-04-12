package com.technomori.instantmessagingsse.dtos;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;
    private String name;
    private String email;
    private String location;
    private String phone;
    private String profileImgUrl;

}

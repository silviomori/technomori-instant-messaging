package com.technomori.instantmessagingsse.services;

import java.util.List;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;

public interface UserService {

    public List<UserProfileDTO> findAll();

}

package com.technomori.instantmessagingsse.services;

import java.security.Principal;
import java.util.List;

import com.technomori.instantmessagingsse.dtos.UserProfileDTO;

public interface UserService {

    List<UserProfileDTO> findAll();

    public UserProfileDTO findAuthenticated(Principal principal);

}

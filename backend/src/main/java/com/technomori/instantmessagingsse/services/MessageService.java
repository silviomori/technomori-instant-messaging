package com.technomori.instantmessagingsse.services;

import com.technomori.instantmessagingsse.dtos.MessageInsertDTO;

public interface MessageService {

    Long insert(MessageInsertDTO message);

}

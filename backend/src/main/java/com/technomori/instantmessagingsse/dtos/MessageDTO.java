package com.technomori.instantmessagingsse.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String text;
    private LocalDate sentAt;
    private UserProfileDTO user;
    private Long chatId;

}

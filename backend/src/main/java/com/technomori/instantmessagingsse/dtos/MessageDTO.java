package com.technomori.instantmessagingsse.dtos;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageDTO {

    private Long id;
    private String text;
    private LocalDate sentAt;
    private UserProfileDTO user;
    private Long chatId;

}

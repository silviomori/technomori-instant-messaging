package com.technomori.instantmessagingsse.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageInsertDTO {

    private String text;
    private Long chatId;

}

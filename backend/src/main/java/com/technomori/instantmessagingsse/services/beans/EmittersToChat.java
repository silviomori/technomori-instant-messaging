package com.technomori.instantmessagingsse.services.beans;

import java.util.HashMap;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Component
@Scope("singleton")
public class EmittersToChat extends HashMap<Long, List<SseEmitter>> {
    private static final long serialVersionUID = 1L;

}

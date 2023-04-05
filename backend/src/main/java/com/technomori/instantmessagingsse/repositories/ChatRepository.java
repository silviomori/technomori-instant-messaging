package com.technomori.instantmessagingsse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.instantmessagingsse.entities.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}

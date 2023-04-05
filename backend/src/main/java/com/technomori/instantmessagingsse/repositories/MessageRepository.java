package com.technomori.instantmessagingsse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.instantmessagingsse.entities.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}

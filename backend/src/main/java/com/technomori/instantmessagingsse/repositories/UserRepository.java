package com.technomori.instantmessagingsse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.instantmessagingsse.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}

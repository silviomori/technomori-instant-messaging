package com.technomori.instantmessagingsse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.instantmessagingsse.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByEmail(String email);

}

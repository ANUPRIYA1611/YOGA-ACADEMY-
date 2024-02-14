package com.yoga.anupriya.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.anupriya.model.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}

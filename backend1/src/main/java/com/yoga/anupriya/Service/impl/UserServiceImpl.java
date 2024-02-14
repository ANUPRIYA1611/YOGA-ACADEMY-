package com.yoga.anupriya.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.UserRepository;
import com.yoga.anupriya.Service.UserService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserResponse;
import com.yoga.anupriya.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
   
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user->UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .image(user.getId())
        .phoneNumber(user.getPhoneNumber())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserResponse>builder()
        .message("User data fetched successfully!")
          .data(userResponses)
          .build();
        
    }

}
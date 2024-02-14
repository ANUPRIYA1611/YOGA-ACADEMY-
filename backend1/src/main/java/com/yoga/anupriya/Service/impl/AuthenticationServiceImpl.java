package com.yoga.anupriya.Service.impl;

import static com.yoga.anupriya.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.UserRepository;
import com.yoga.anupriya.Service.AuthenticationService;
import com.yoga.anupriya.dto.request.LoginRequest;
import com.yoga.anupriya.dto.request.RegisterRequest;
import com.yoga.anupriya.dto.response.LoginResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.model.User;
import com.yoga.anupriya.utils.JwtUtil;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{
private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent())
        {
            return RegisterResponse.builder().message("User with mail id"+request.getEmail()+" is already exists!")
            .build();
        }
        var user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
            .message("User Logged in successfully!")
            .token(token)
            .build();
    }
}

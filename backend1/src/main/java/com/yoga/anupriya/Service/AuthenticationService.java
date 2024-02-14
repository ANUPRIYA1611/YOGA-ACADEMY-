package com.yoga.anupriya.Service;

import com.yoga.anupriya.dto.request.LoginRequest;
import com.yoga.anupriya.dto.request.RegisterRequest;
import com.yoga.anupriya.dto.response.LoginResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;

public interface AuthenticationService {
   RegisterResponse register(RegisterRequest request);
   LoginResponse login(LoginRequest request);
}

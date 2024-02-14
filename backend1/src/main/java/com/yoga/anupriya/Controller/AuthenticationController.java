package com.yoga.anupriya.Controller;


import static com.yoga.anupriya.utils.MyConstant.AUTH;
import static com.yoga.anupriya.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Service.AuthenticationService;
import com.yoga.anupriya.dto.request.LoginRequest;
import com.yoga.anupriya.dto.request.RegisterRequest;
import com.yoga.anupriya.dto.response.LoginResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor


public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping(REGISTER) 
    public ResponseEntity<RegisterResponse>register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response=new RegisterResponse();
        try{
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }catch (Exception e)
        {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
     @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<LoginResponse>login(@RequestBody LoginRequest request)
    {
        LoginResponse response=new LoginResponse();
        try{
              response=authenticationService.login(request);
              return new ResponseEntity<>(response,ACCEPTED);

        }catch(Exception e)
        {
            LoginResponse.builder().message("Something went wrong!").token("").build();
            return  new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
}
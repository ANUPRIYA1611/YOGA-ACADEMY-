package com.yoga.anupriya.Controller;

import static com.yoga.anupriya.utils.MyConstant.USER;
import static com.yoga.anupriya.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Service.UserService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;
        
    @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> getAllUser() {
            BasicResponse<UserResponse> response=new BasicResponse<>();
            try {
                response=userService.getAllUser();
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                response.setMessage("Something went wrong!");
                return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
            }
        }
    
}
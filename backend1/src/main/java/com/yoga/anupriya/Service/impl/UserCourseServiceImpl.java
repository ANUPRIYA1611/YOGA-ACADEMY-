package com.yoga.anupriya.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.UserCourseRepository;
import com.yoga.anupriya.Service.UserCourseService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserCourseResponse;
import com.yoga.anupriya.model.UserCourse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
     
    private final UserCourseRepository userCourseRepository;

    @Override
    public BasicResponse<UserCourseResponse> getAllUserCourse() {
        List<UserCourse> users = userCourseRepository.findAll();
        List<UserCourseResponse> userCourseResponses = users.stream().map(user->UserCourseResponse.builder()
        .userCourse_id(user.getUserCourse_id())
        .course_name(user.getCourse_name())
        .duration(user.getDuration())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserCourseResponse>builder()
        .message("User data fetched successfully!")
          .data(userCourseResponses)
          .build();
        
    }

    
    @Override
    public BasicResponse<UserCourseResponse> deleteusercourse(String usercourse_id) {
       
        if (userCourseRepository.existsById(usercourse_id)) {
          userCourseRepository.deleteById(usercourse_id);
            return BasicResponse.<UserCourseResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } else {
            return BasicResponse.<UserCourseResponse>builder()
                .message("Booking not found with ID: " + usercourse_id)
                .build();
        }
    }


}

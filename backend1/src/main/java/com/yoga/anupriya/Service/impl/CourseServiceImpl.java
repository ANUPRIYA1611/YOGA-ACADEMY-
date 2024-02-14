package com.yoga.anupriya.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.CourseRepository;
import com.yoga.anupriya.Service.CourseService;
import com.yoga.anupriya.dto.request.CourseRequest;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.CourseResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.model.Course;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService{
    private final CourseRepository courseRepository;

    @Override
    public BasicResponse<CourseResponse> getAllcourses() {
        List<Course> courses = courseRepository.findAll();
        List<CourseResponse> courseResponses = courses.stream().map(course->CourseResponse.builder()
        .duration(course.getDuration())
        .institution(course.getInstitution())
        .course_name(course.getCourse_name())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<CourseResponse>builder()
        .message("Course data fetched successfully!")
          .data(courseResponses)
          .build();
        
    }
     @Override
    public RegisterResponse addCourse(CourseRequest request) {
    
        var user=Course.builder()
                .course_name(request.getCourse_name())
                .duration(request.getDuration())
                .institution(request.getInstitution())
                .build();
                courseRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("course create successfully!")
        .build();
    }


  

    @Override
    public BasicResponse<CourseResponse> deletecourse(String course_id) {
        // TODO Auto-generated method stub
        if (courseRepository.existsById(course_id)) {
            courseRepository.deleteById(course_id);
            return BasicResponse.<CourseResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } else {
            return BasicResponse.<CourseResponse>builder()
                .message("Booking not found with ID: " + course_id)
                .build();
        }
    }

}

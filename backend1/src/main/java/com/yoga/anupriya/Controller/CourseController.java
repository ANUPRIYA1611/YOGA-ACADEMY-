package com.yoga.anupriya.Controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Repository.CourseRepository;
import com.yoga.anupriya.Service.CourseService;
import com.yoga.anupriya.dto.request.CourseRequest;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.CourseResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.model.Course;
import com.yoga.anupriya.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(MyConstant.COURSE)
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;
    private final CourseRepository courseRepository;
    @GetMapping("path")
    public ResponseEntity<BasicResponse<CourseResponse>> getAllUser() {
            BasicResponse<CourseResponse> response=new BasicResponse<>();
            try {
                response=courseService.getAllcourses();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Something went wrong!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }}
    @PostMapping(MyConstant.ADDCOURSE)
       public ResponseEntity<RegisterResponse> login(@RequestBody    CourseRequest request)
       {
           RegisterResponse response=new RegisterResponse();
           try{
                response=courseService.addCourse(request);
                return new ResponseEntity<>(response,HttpStatus.OK);
           }catch(Exception e)
           {    
               response.setMessage("something went wrong!");
       
               // LoginResponse.builder().message("Something went wrong!").token("").build();
               return  new ResponseEntity<>(response,EXPECTATION_FAILED);
           }
       }

       @PutMapping(MyConstant.UPDATECOURSE + "/{course_id}")
        public ResponseEntity<RegisterResponse> updateBooking(@PathVariable String course_id, @RequestBody CourseRequest courseRequest) {
     RegisterResponse response = new RegisterResponse();
        try {
            // Check if the course with the given courseId exists
            Optional<Course> optionalCourse = courseRepository.findById(course_id);
            if (optionalCourse.isPresent()) {
                Course existingCourse = optionalCourse.get();
                // Update the existing course details
                existingCourse.setCourse_name(courseRequest.getCourse_name());
                existingCourse.setDuration(courseRequest.getDuration());
                existingCourse.setInstitution(courseRequest.getInstitution());
                courseRepository.save(existingCourse);
                response.setMessage("Course updated successfully");
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
            } else {
                response.setMessage("Course not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
        }

    
    }

    @DeleteMapping(MyConstant.DELETECOURSE + "/{course_id}")
    public ResponseEntity<BasicResponse<CourseResponse>> deletecourse(@PathVariable String course_id) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<CourseResponse> deletedBookingResponse = courseService.deletecourse(course_id);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

        }
    


package com.yoga.anupriya.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Service.UserCourseService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserCourseResponse;
import com.yoga.anupriya.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RequestMapping(MyConstant.USER)
@RestController
@RequiredArgsConstructor
public class UserCourseController {
   private final UserCourseService userCourseService;
       @GetMapping(MyConstant.USERCOURSELIST)
       public ResponseEntity<BasicResponse<UserCourseResponse>> create() {
        BasicResponse<UserCourseResponse> response=new BasicResponse<>();


           try {
               response=userCourseService.getAllUserCourse();
               return new ResponseEntity<>(response, OK);
           } catch (Exception e) {
               response.setMessage("Something went wrong!");
               return new ResponseEntity<>(response, EXPECTATION_FAILED);
           }
       }
   

    @DeleteMapping(MyConstant.DELETEUSERCOURSE + "/{usercourse_id}")
    public ResponseEntity<BasicResponse<UserCourseResponse>> deleteusercourse(@PathVariable String usercourse_id) {
        BasicResponse<UserCourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserCourseResponse> deletedBookingResponse = userCourseService.deleteusercourse(usercourse_id);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete course: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   
}

package com.yoga.anupriya.Service;

import com.yoga.anupriya.dto.request.CourseRequest;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.CourseResponse;
import com.yoga.anupriya.dto.response.RegisterResponse;

public interface CourseService {
    BasicResponse<CourseResponse> getAllcourses();
      RegisterResponse addCourse(CourseRequest request);
    // BasicResponse<RegisterResponse> deletecourse(String course_id);
    BasicResponse<CourseResponse> deletecourse(String course_id);
    // BasicResponse<CourseResponse> updateCourse(String course_id,CourseRequest request);
}

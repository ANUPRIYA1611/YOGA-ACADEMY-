package com.yoga.anupriya.Service;

import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserCourseResponse;

public interface UserCourseService {
       BasicResponse<UserCourseResponse> getAllUserCourse() ;
       BasicResponse<UserCourseResponse> deleteusercourse(String usercourse_id);
}

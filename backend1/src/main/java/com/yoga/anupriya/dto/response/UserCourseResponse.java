package com.yoga.anupriya.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCourseResponse {
    private String userCourse_id;
    private String course_name;
    private String duration;
    private String user_name;
   
} 

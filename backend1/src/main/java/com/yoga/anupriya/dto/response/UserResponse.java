package com.yoga.anupriya.dto.response;


import com.yoga.anupriya.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private String id;
    private String name;
    private String email;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String Address;
}

package com.yoga.anupriya.model;

import static jakarta.persistence.GenerationType.UUID;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="usercourses")
public class UserCourse {
    @Id
    @GeneratedValue(strategy = UUID)
    private String userCourse_id;

     @Column(nullable=false)
     private String course_name;

     @Column(nullable=false)
     private String duration;

  

}

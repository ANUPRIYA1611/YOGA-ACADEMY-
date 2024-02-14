package com.yoga.anupriya.model;
import static jakarta.persistence.GenerationType.UUID;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name="courses")
public class Course {
    @Id
    @GeneratedValue(strategy = UUID)
    private String course_id;

    @Column(nullable = true)
    private String course_name;

    @Column(nullable = true)
    private String institution;

    @Column(nullable = true)
    private String duration;
    
    
}
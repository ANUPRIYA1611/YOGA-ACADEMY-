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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = UUID)
    private String payment_id;

    @Column(nullable=true)
    private String amount;
    @Column(nullable = true)
    private String name;
    @Column(nullable = true)
    private String course_name;



}

package com.yoga.anupriya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.anupriya.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String>{

}

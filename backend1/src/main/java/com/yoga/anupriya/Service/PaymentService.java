package com.yoga.anupriya.Service;

import com.yoga.anupriya.dto.request.PaymentRequest;
import com.yoga.anupriya.dto.response.RegisterResponse;

public interface PaymentService {
    public RegisterResponse addPayment(PaymentRequest request);
 
 }
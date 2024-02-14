package com.yoga.anupriya.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Service.PaymentService;
import com.yoga.anupriya.dto.request.PaymentRequest;

import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RequestMapping(MyConstant.PAY)
@RestController
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
   
     @PostMapping(MyConstant.PAYMENTLIST)
       public ResponseEntity<RegisterResponse> addPayment(@RequestBody PaymentRequest request)
       {
           RegisterResponse response=new RegisterResponse();
           try{
                response=paymentService.addPayment(request);
                return new ResponseEntity<>(response,HttpStatus.OK);
           }catch(Exception e)
           {     System.out.print(e);
               response.setMessage("something went wrong!");
       
               // LoginResponse.builder().message("Something went wrong!").token("").build();
               return  new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
           }
       }
}
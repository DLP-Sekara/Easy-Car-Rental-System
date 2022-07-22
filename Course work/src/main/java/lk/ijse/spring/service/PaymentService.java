package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.dto.PaymentDto;

import java.util.List;

public interface PaymentService {
     void savePayment(PaymentDto paymentDto);

     void deletePayment(String paymentId);

     void updatePayment(PaymentDto paymentDto);

     PaymentDto searchPayment(String paymentId);

     List<PaymentDto> getAllPayment();
}

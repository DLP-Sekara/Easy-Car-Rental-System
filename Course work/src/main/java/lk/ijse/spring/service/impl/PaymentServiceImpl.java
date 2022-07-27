package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.PaymentDto;
import lk.ijse.spring.dto.RentDetailsDto;
import lk.ijse.spring.dto.RentDto;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.PaymentRepo;
import lk.ijse.spring.repo.RentDetailsRepo;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepo repo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private RentRepo rentRepo;
    @Autowired
    private CarRepo carRepo;
    @Override
    public void savePayment(PaymentDto paymentDto) {
        if (!repo.existsById(paymentDto.getPaymentId())) {
            repo.save(mapper.map(paymentDto, Payment.class));

            RentDto rentDto=paymentDto.getRent();
            rentDto.setStatus("returned");
            rentRepo.save(mapper.map(rentDto, Rent.class));

            for (RentDetailsDto rentDetails : rentDto.getRentDetails()) {
                Car car = carRepo.findById(rentDetails.getCar_reg_no()).get();
                car.setStatus("Available");
                carRepo.save(car);
            }

        } else {
            throw new RuntimeException("Payment Already Exist..!");
        }
    }

    @Override
    public void deletePayment(String paymentId) {
        if (repo.existsById(paymentId)) {
            repo.deleteById(paymentId);
        } else {
            throw new RuntimeException("Please check the Payment ID.. No Such Payment..!");
        }
    }

    @Override
    public void updatePayment(PaymentDto paymentDto) {
        if (repo.existsById(paymentDto.getPaymentId())) {
            Payment payment = mapper.map(paymentDto, Payment.class);
            repo.deleteById(paymentDto.getPaymentId());
            repo.save(payment);
        } else {
            throw new RuntimeException("No Such Payment To Update..! Please Check the ID..!");
        }
    }

    @Override
    public PaymentDto searchPayment(String paymentId) {
        if (repo.existsById(paymentId)) {
            return mapper.map(repo.findById(paymentId).get(), PaymentDto.class);
        } else {
            throw new RuntimeException("No payment For " + paymentId + " ..!");
        }
    }

    @Override
    public List<PaymentDto> getAllPayment() {
        return mapper.map(repo.findAll(), new TypeToken<List<PaymentDto>>() {
        }.getType());
    }
}

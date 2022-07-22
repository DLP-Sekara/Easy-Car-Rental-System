package lk.ijse.spring.controller;

import lk.ijse.spring.dto.PaymentDto;
import lk.ijse.spring.dto.RentDto;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("payment")
@CrossOrigin
public class paymentController {

    @Autowired
    PaymentService paymentService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayment() {
         return new ResponseUtil(200,"Ok",paymentService.getAllPayment());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@RequestBody PaymentDto paymentDto) {
        paymentService.savePayment(paymentDto);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updatePayment(@RequestBody PaymentDto paymentDto) {
        paymentService.updatePayment(paymentDto);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"paymentId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deletePayment(@RequestParam String paymentId) {
        paymentService.deletePayment(paymentId);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{paymentId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchPayment(@PathVariable String paymentId) {
        return new ResponseUtil(200,"Ok",paymentService.searchPayment(paymentId));
    }


}

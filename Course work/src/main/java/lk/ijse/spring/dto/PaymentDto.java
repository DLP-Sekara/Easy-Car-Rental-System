package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDto {
    private String paymentId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private String returnTime;
    private double damage_cost;
    private double distance_cost;
    private double total_amount;
    private RentDto rent;

    
}

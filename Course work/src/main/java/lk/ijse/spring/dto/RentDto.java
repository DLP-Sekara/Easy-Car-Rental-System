package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDto {
    private String rentID;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private String pickUpTime;
    private String driver;
    private String status;
    private double cash_on_hand;
    private CustomerDto customer;
    private List<RentDetailsDto> rentDetails;
    
}

package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class RentDetails {
    @Id
    private String rentID;
    private String car_reg_no;
    private String driver;
    private LocalDate date;
    private String pickup_time;

    @ManyToOne
    @JoinColumn(name = "rentID",referencedColumnName = "rentID",insertable = false,updatable = false)
    private Rent rent;


    @ManyToOne
    @JoinColumn(name = "car_reg_no",referencedColumnName = "car_reg_no",insertable = false,updatable = false)
    private Car car;
}

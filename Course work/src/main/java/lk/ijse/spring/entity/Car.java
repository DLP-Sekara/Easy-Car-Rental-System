package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String car_reg_no;
    private String brand;
    private String type;
    private String color;
    private String fuel_type;
    private String transmission_type;
    private String status;
    private double daily_price;
    private double monthly_price;
    private double extra_km_price;
    private int no_of_passengers;
}

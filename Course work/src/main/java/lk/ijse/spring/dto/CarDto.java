package lk.ijse.spring.dto;

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
public class CarDto {
    private String car_reg_no;
    private String brand;
    private String type;
    private String color;
    private String fuel_type;
    private String transmission_type;
    private String status;
    private String car_group;
    private double damageCost;
    private double daily_price;
    private double monthly_price;
    private double extra_km_price;
    private int no_of_passengers;
}

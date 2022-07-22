package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDto;
import lk.ijse.spring.dto.CustomerDto;

import java.util.List;

public interface CarService {
     void saveCar(CarDto carDto);

     void deleteCar(String car_reg_no);

     void updateCar(CarDto carDto);

     CarDto searchCar(String car_reg_no);

     List<CarDto> getAllCar();
}

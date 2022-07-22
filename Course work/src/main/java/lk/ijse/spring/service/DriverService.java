package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.dto.DriverDto;

import java.util.List;

public interface DriverService {
     void saveDriver(DriverDto driverDto);

     void deleteDriver(String driverID);

     void updateDriver(DriverDto driverDto);

     DriverDto searchDriver(String driverID);

     List<DriverDto> getAllDrivers();
}

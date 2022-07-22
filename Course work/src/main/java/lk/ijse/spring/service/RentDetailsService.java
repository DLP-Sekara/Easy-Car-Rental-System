package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.dto.RentDetailsDto;

import java.util.List;

public interface RentDetailsService {
     void saveRentDetails(RentDetailsDto rentDetailsDto);

     void deleteRentDetails(String id);

     void updateRentDetails(RentDetailsDto customerDto);

     RentDetailsDto searchRentDetails(String id);

     List<RentDetailsDto> getAllRentDetails();
}

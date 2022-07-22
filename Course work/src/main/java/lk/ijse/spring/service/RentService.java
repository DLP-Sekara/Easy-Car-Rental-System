package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.dto.RentDto;

import java.util.List;

public interface RentService {
     void saveRent(RentDto rentDto);

     void deleteRent(String rentID);

     void updateRent(RentDto customerDto);

     RentDto searchRent(String rentID);

     List<RentDto> getAllRent();
}

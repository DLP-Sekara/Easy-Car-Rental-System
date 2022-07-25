package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;

import java.util.List;

public interface CustomerService {
     void saveCustomer(CustomerDto customerDto);

     void deleteCustomer(String id);

     void updateCustomer(CustomerDto customerDto);

     CustomerDto searchCustomer(String id);

     boolean checkCustomer(String username,String password);

     List<CustomerDto> getAllCustomer();
}

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDto customerDto) {
        if (!repo.existsById(customerDto.getUsername())) {
            Customer entity = mapper.map(customerDto, Customer.class);
            repo.save(entity);
        } else {
            throw new RuntimeException("Customer Already Exist...");
        }
    }

    @Override
    public void deleteCustomer(String username) {
        if (repo.existsById(username)) {
            repo.deleteById(username);
        } else {
            throw new RuntimeException("Please check the customer id");
        }
    }

    @Override
    public void updateCustomer(CustomerDto customerDto) {
        if (repo.existsById(customerDto.getUsername())) {
            Customer entity = mapper.map(customerDto, Customer.class);
            repo.save(entity);
        } else {
            throw new RuntimeException("No such customer");
        }
    }

    @Override
    public CustomerDto searchCustomer(String username) {
        if (repo.existsById(username)) {
            Customer customer = repo.findById(username).get();
            CustomerDto map = mapper.map(customer, CustomerDto.class);
            return map;
        } else {
            throw new RuntimeException("No customer");
        }
    }

    @Override
    public List<CustomerDto> getAllCustomer() {
        List<Customer> all = repo.findAll();
        return mapper.map(all,new TypeToken<List<CustomerDto>>(){}.getType());

    }
}
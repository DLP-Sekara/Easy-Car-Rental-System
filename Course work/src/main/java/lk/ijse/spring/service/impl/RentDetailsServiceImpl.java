package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentDetailsDto;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.RentDetails;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.RentDetailsRepo;
import lk.ijse.spring.service.RentDetailsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class RentDetailsServiceImpl implements RentDetailsService {
    @Autowired
    private RentDetailsRepo repo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private CarRepo carRepo;

    @Override
    public void saveRentDetails(RentDetailsDto rentDetailsDto) {
        if (!repo.existsById(rentDetailsDto.getRentID())) {
            repo.save(mapper.map(rentDetailsDto, RentDetails.class));
/*

            Car car = carRepo.findById(rentDetailsDto.getCar_reg_no()).get();
            System.out.println("menna car eka");
            System.out.println(car);
            car.setStatus("Running");
            carRepo.save(car);

*/


        } else {
            throw new RuntimeException("rentDetails Already Exist..!");
        }
    }

    @Override
    public void deleteRentDetails(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the rentDetails ID.. No Such rentDetails..!");
        }
    }

    @Override
    public void updateRentDetails(RentDetailsDto customerDto) {
        if (repo.existsById(customerDto.getRentID())) {
            repo.save(mapper.map(customerDto, RentDetails.class));
        } else {
            throw new RuntimeException("No Such rentDetails To Update..! Please Check the ID..!");
        }
    }

    @Override
    public RentDetailsDto searchRentDetails(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), RentDetailsDto.class);
        } else {
            throw new RuntimeException("No rentDetails For " + id + " ..!");
        }
    }

    @Override
    public List<RentDetailsDto> getAllRentDetails() {
        return mapper.map(repo.findAll(), new TypeToken<List<RentDetailsDto>>() {
        }.getType());
    }
}

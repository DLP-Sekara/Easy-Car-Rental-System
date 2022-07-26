package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentDetailsDto;
import lk.ijse.spring.dto.RentDto;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.entity.RentDetails;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class RentServiceImpl implements RentService {

    @Autowired
    private RentRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private CarRepo carRepo;
    @Override
    public void saveRent(RentDto rentDto) {
        if (!repo.existsById(rentDto.getRentID())) {
           repo.save(mapper.map(rentDto, Rent.class));


            for (RentDetailsDto rentDetails : rentDto.getRentDetails()) {
                Car car = carRepo.findById(rentDetails.getCar_reg_no()).get();
                car.setStatus("Running");
                carRepo.save(car);
            }


        } else {
            throw new RuntimeException("Rent Already Exist..!");
        }
    }

    @Override
    public void deleteRent(String rentID) {
        if (repo.existsById(rentID)) {
            repo.deleteById(rentID);
        } else {
            throw new RuntimeException("Please check the Rent ID.. No Such Rent..!");
        }
    }

    @Override
    public void updateRent(RentDto customerDto) {
        if (repo.existsById(customerDto.getRentID())) {
            Rent rent = mapper.map(customerDto, Rent.class);
            repo.deleteById(customerDto.getRentID());
            repo.save(rent);
        } else {
            throw new RuntimeException("No Such Rent To Update..! Please Check the ID..!");
        }
    }

    @Override
    public RentDto searchRent(String rentID) {
        if (repo.existsById(rentID)) {
            return mapper.map(repo.findById(rentID).get(), RentDto.class);
        } else {
            throw new RuntimeException("No Rent For " + rentID + " ..!");
        }
    }

    @Override
    public List<RentDto> getAllRent() {
        return mapper.map(repo.findAll(), new TypeToken<List<RentDto>>() {
        }.getType());
    }
}

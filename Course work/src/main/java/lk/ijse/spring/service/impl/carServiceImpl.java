package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDto;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class carServiceImpl implements CarService {

    @Autowired
    private CarRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCar(CarDto carDto) {
        if (!repo.existsById(carDto.getCar_reg_no())) {
            repo.save(mapper.map(carDto, Car.class));
        } else {
            throw new RuntimeException("Car Already Exist..!");
        }

    }

    @Override
    public void deleteCar(String car_reg_no) {
        if (repo.existsById(car_reg_no)) {
            repo.deleteById(car_reg_no);
        } else {
            throw new RuntimeException("Please check the Car reg_no.. No Such Car..!");
        }
    }

    @Override
    public void updateCar(CarDto carDto) {
        if (repo.existsById(carDto.getCar_reg_no())) {
            repo.save(mapper.map(carDto, Car.class));
        } else {
            throw new RuntimeException("No Such Car To Update..! Please Check the ID..!");
        }
    }

    @Override
    public CarDto searchCar(String car_reg_no) {
        if (repo.existsById(car_reg_no)) {
            return mapper.map(repo.findById(car_reg_no).get(), CarDto.class);
        } else {
            throw new RuntimeException("No Car For " + car_reg_no + " ..!");
        }
    }

    @Override
    public List<CarDto> getAllCar() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDto>>() {
        }.getType());
    }
}

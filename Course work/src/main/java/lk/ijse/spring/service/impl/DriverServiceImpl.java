package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDto;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveDriver(DriverDto driverDto) {
        if (!repo.existsById(driverDto.getDriverID())) {
            repo.save(mapper.map(driverDto, Driver.class));
        } else {
            throw new RuntimeException("Driver Already Exist..!");
        }
    }

    @Override
    public void deleteDriver(String driverID) {
        if (repo.existsById(driverID)) {
            repo.deleteById(driverID);
        } else {
            throw new RuntimeException("Please check the Driver ID.. No Such Driver..!");
        }
    }

    @Override
    public void updateDriver(DriverDto driverDto) {
        if (repo.existsById(driverDto.getDriverID())) {
            repo.save(mapper.map(driverDto, Driver.class));
        } else {
            throw new RuntimeException("No Such Driver To Update..! Please Check the ID..!");
        }
    }

    @Override
    public DriverDto searchDriver(String driverID) {
        if (repo.existsById(driverID)) {
            return mapper.map(repo.findById(driverID).get(), DriverDto.class);
        } else {
            throw new RuntimeException("No Driver For " + driverID + " ..!");
        }
    }

    @Override
    public List<DriverDto> getAllDrivers() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDto>>() {
        }.getType());
    }
}

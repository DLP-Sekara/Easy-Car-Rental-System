package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car,String> {

    //Car findByCar_reg_no(String car_reg_no);
}


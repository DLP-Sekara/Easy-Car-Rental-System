package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDto;
import lk.ijse.spring.dto.CarDto;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCar() {
         return new ResponseUtil(200,"Ok",carService.getAllCar());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@ModelAttribute CarDto carDto) {
        carService.saveCar(carDto);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDto carDto) {
        carService.updateCar(carDto);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"car_reg_no"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String car_reg_no) {
        carService.deleteCar(car_reg_no);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{car_reg_no}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable String car_reg_no) {
        return new ResponseUtil(200,"Ok",carService.searchCar(car_reg_no));
    }


}

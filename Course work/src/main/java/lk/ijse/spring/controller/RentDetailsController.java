package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentDetailsDto;
import lk.ijse.spring.dto.RentDto;
import lk.ijse.spring.service.RentDetailsService;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rentDetails")
@CrossOrigin
public class RentDetailsController {

    @Autowired
    RentDetailsService rentDetailsService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRentDetails() {
         return new ResponseUtil(200,"Ok",rentDetailsService.getAllRentDetails());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRentDetails(@RequestBody RentDetailsDto rentDetailsDto) {
        rentDetailsService.saveRentDetails(rentDetailsDto);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRentDetails(@RequestBody RentDetailsDto rentDetailsDto) {
        rentDetailsService.updateRentDetails(rentDetailsDto);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"rentID"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRentDetails(@RequestParam String rentID) {
        rentDetailsService.deleteRentDetails(rentID);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{rentID}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRentDetails(@PathVariable String rentID) {
        return new ResponseUtil(200,"Ok",rentDetailsService.searchRentDetails(rentID));
    }


}

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDto;
import lk.ijse.spring.dto.RentDto;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService rentService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRent() {
         return new ResponseUtil(200,"Ok",rentService.getAllRent());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveRent(@RequestBody RentDto rentDto) {
        rentService.saveRent(rentDto);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRent(@RequestBody RentDto rentDto) {
        rentService.updateRent(rentDto);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"rentID"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteRent(@RequestParam String rentID) {
        rentService.deleteRent(rentID);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{rentID}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRent(@PathVariable String rentID) {
        return new ResponseUtil(200,"Ok",rentService.searchRent(rentID));
    }


}

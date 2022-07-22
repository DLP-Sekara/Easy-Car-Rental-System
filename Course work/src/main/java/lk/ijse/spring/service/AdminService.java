package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDto;
import lk.ijse.spring.dto.CustomerDto;

import java.util.List;

public interface AdminService {
     void saveAdmin(AdminDto adminDto);

     void deleteAdmin(String username);

     void updateAdmin(AdminDto adminDto);

     AdminDto searchAdmin(String username);

     List<AdminDto> getAllAdmin();
}

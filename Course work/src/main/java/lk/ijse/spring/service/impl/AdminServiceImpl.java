package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDto;
import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.AdminRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class AdminServiceImpl implements lk.ijse.spring.service.AdminService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private AdminRepo repo;

    @Override
    public void saveAdmin(AdminDto adminDto) {
        if (!repo.existsById(adminDto.getUsername())) {
            Admin entity = mapper.map(adminDto, Admin.class);
            repo.save(entity);
        } else {
            throw new RuntimeException("Admin Already Exist...");
        }
    }

    @Override
    public void deleteAdmin(String username) {
        if (repo.existsById(username)) {
            repo.deleteById(username);
        } else {
            throw new RuntimeException("Please check the Admin id");
        }
    }

    @Override
    public void updateAdmin(AdminDto adminDto) {
        if (repo.existsById(adminDto.getUsername())) {
            Admin entity = mapper.map(adminDto, Admin.class);
            repo.save(entity);
        } else {
            throw new RuntimeException("No such admin");
        }
    }

    @Override
    public AdminDto searchAdmin(String username) {
        if (repo.existsById(username)) {
            Admin admin = repo.findById(username).get();
            AdminDto map = mapper.map(admin, AdminDto.class);
            return map;
        } else {
            throw new RuntimeException("No admin");
        }
    }

    @Override
    public List<AdminDto> getAllAdmin() {
        List<Admin> all = repo.findAll();
        return mapper.map(all,new TypeToken<List<AdminDto>>(){}.getType());

    }
}

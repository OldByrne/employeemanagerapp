package com.davidbyrne.employeemanager.service;

import com.davidbyrne.employeemanager.exception.UserNotFoundException;
import com.davidbyrne.employeemanager.model.Employee;
import com.davidbyrne.employeemanager.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo; //creating an instance of the repo to pass into the constructor so it is available every time the class is constructed.

    @Autowired //used for automatic dependency injection
    public EmployeeService(EmployeeRepo employeeRepo) { //this is the EmployeeService constructor. every time it is constructed, the repo will be passed in to use.
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee (Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee); //this JPA stuff (employeeRepo extending JpaRepository) is making all the SQL for me to make new DB entries so I don't have to
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundException("User " + id + " not found.")); //need to make a class to define this custom exception
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id); //had to manually add this to the EmployeeRepo interface as its a custom made method unlike the pre-mades above
    }

}

package com.davidbyrne.employeemanager.repo;

import com.davidbyrne.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> { //passing in repo of type employee with ID type of Long
    void deleteEmployeeById(Long id); //used in the service class for the delete method

    Optional<Employee> findEmployeeById(Long id); //it looks like there's no actual code for what we want this custom method to do but spring reads the method name and interprets it (magic aka query method)
}

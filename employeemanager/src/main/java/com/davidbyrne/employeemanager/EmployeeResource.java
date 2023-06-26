package com.davidbyrne.employeemanager;

import com.davidbyrne.employeemanager.model.Employee;
import com.davidbyrne.employeemanager.service.EmployeeService;
import jakarta.persistence.GeneratedValue;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin //used to get around CORS error (accessing resources from different domains)
public class EmployeeResource { //controller class, some reason he doesn't call it that or put it in a controller package
    private final EmployeeService employeeService;

    private EmployeeResource(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping("/all") //so with default being /employee from the requestmapping, this is actually /employee/all
    public ResponseEntity<List<Employee>> getAllEmployees(){ //ResponseEntity used for HTTP responses
        List<Employee> employees = employeeService.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK); //sending also HTTP OK to show that everything went well. ResponseEntity used for HTTP responses

    }

    @GetMapping("/find/{id}") //so using this URL to find a specific employee by ID. so using the default mapping as well, this is in fact /employee/find/id
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id){ //instead of using Long id, use the PathVariable annotation to get the id from the mapping
        Employee employee = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);

    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){ //taking in whatever is in the body of the request
        Employee newEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED); //more descriptive http response
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){ //nearly the same as the post add employee
        Employee updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id){
        employeeService.deleteEmployee(id); //delete method doesnt need to return anything so not storing this in anything
        return new ResponseEntity<>(HttpStatus.OK); //just need to return OK message
    }
}
import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //this code below will be accessible for this html file (web page).
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ //OnInit just means this class will run on web page loading. so it will get all employees(via below method) on loading.
  public employees: Employee[] = []; //array of Employee called employees.
  public editEmployee!: Employee; //this variable "editEmployee" represents whatever employee will be editted when running that function. "!" is used to say there will be a value
  public deleteEmployee!: Employee; //same again but for deleted employee

  constructor(private employeeService: EmployeeService) { } //injection of the services class

  ngOnInit(){ //just need to override this function when implementing OnIt above. all it does is run this method on creation which in turn runs the getEmployees method.
    this.getEmployees();
  }

  //angular newer version iteration of this method. is a bit different in the tutorial.
  //this method is just to get all the employees when it is called.
  public getEmployees(): void {
    this.employeeService.getEmployees( ).subscribe({ //subscribe used to say there could be waiting as there's a network call to backend. then if response success or fail.
      next: (response: Employee[ ]) => //this isnt runnin the function of getting all emps, its just what to do if the method call works or not
        this.employees = response,
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

    //depreciated syntax from tutorial
  // public getEmployees(): void{
  //   this.employeeService.getEmployees().subscribe( ////subscribe used to say there could be waiting as there's a network call to backend. then if response success or fail.
  //     (response: Employee[]) => {
  //       this.employees = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   );
  // }

  public onAddEmployee(addForm: NgForm): void{ //takes the form of person details from the HTML file in JSON form. addEmployee is a service on backend
    document.getElementById('add-employee-form')!.click(); //using "!" here to say that TS should not worry, there will be value in this id 100%
    this.employeeService.addEmployee(addForm.value).subscribe({
      next: (response: Employee) => { //added curly braces here so i can have the 3 following lines of code rather than just 1
        console.log(response) //just logging the addition of an employee to the log
        this.getEmployees() //after the add is a success, get the full list of employees again to reload the page
        addForm.reset()}, //clears form for next use
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset()
      }
    }); 
  }

  public onUpdateEmployee(employee: Employee): void{ //takes an employee of type Employee. very similar to add employee but the backend will use put instead of post
      this.employeeService.updateEmployee(employee).subscribe({
      next: (response: Employee) => {
        console.log(response) 
        this.getEmployees()}, //after the update is a success, get the full list of employees again to reload the page
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }); 
  }

  public onDeleteEmployee(employeeId: number): void{ //takes an employee of type Employee. very similar to add employee but the backend will use put instead of post
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: (response: void) => {
        console.log(response) 
        this.getEmployees()}, //after the update is a success, get the full list of employees again to reload the page
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for(const employee of this.employees){ //looping over all employees in the array of them
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 || //if emp name etc at this index does not equal -1 it means we found it (.indexOf covered in MDN docs)
         employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
         employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1){ 
        results.push(employee);
      }
    } 

    this.employees = results; //changing the class varibale of employees to this new set. dont worry will be changed back to full list when any other function is run

    if(results.length === 0 || !key){ //if there are no results from search, this will call getEmployees which will reset the state of the employees array from the back end
      this.getEmployees();
    }

  }

  //when opening a modal (like a window i guess) using a certain employees panel
  public onOpenModal(employee: Employee, mode: string): void { //determines which function to open. add, update etc by passing a mode of type string
    const container = document.getElementById('main-container');
    const button = document.createElement('button'); //not really sure what this is about. some invisible button. nice design thing i think.
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')
    if(mode === 'add'){ //if clicking on add button, open the add employee form in the HTML etc
      button.setAttribute('data-target', '#addEmployeeModal')
    }
    if(mode === 'edit'){
      this.editEmployee = employee; //sets the employee from "onOpenModal(employee:" to editEmployee varibale. each employee panel has an edit button, thats how it knows which employee it is
      button.setAttribute('data-target', '#updateEmployeeModal')
    }
    if(mode === 'delete'){
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal')
    }
    container?.appendChild(button);
    button.click(); //when clicking the button it will open the appropriate modal
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ //this is basically registering this service to be recognised by the angular application. alternative to register it is to use app.module.ts and providers array
  providedIn: 'root'
})
export class EmployeeService { //all of the service code here is to mirror the back end stuff
  private apiServerUrl = environment.apiBaseUrl; //this is calling the custom set URL in the environment/development.ts file

  constructor(private http: HttpClient) { } //injecting HttpClient so we have access to its uses

  //telling the HTTP client where to make the request and what kind of request
  //this.http - calling http client. get<Employee[]> - this is a get request with return type of Employee[]. (`${this.apiServerUrl}/employee/all`) is the url
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`); //"this" is being used to refer to the "http: HttpClient" being injected above 
  }

  //similar to above. (employee: Employee) is the parameter the function takes in. returns Observable<Employee> which is a single Employee.
  //Observable seems to just be a general variable type, need to read up more.
  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee); //the ", employee" bit is the payload which is being posted.
  }

  //same as above but using PUT for updating
  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee); 
  }

  //passing in an empolyeeId of type number instead here and no return type needed.
  //using ${} notation to get the employeeId from the parameters passed in
  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`); 
  }

}

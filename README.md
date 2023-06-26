# employeemanagerapp

EMPLOYEE MANAGER APPLICATION <br />
Spring boot and Angular employee management web app. <br />

How to run: <br />
- Have the database running on a local system.
- Open the springboot folder in an IDE and run.
- Use "ng serve" to run the Angular front end.
- Navigate to "localhost:4200" on browser.

employeemaner folder - backend spring boot <br />
employeemanagerapp folder - frontend angular <br />
requires a database connection on localhost 3306 with the following table setup:<br />
    schema: employeemanager <br />
    table: employee <br />
    id: bigint PRIMARY <br />
    email: varchar <br />
    employeeCode: varchar <br />
    img_url: varchar <br />
    job_title: varchar <br />
    name: varchar <br />
    phone: varchar <br />

The function of this applicaion is to use CRUD operations on a list of employees.<br />
Employee profiles are persisted on a MySQL database.<br />
The backend services interact with the data from the database to create new entries, update existing entires, get entries or delete entries.<br />
The frontend call these backend services and uses it's functionality on a client side GUI web page.<br />
Users can use a tile based GUI to interact with each employee profile. Where action can be made to edit or delete per profile tile or add new employees from the nav bar.<br />
It is also possible to search for employees using a nav bar search function. The results will update live on the page as the search bar is being updated.<br />

MySQL DB <-> Spring boot backend <-> Angular frontend.<br />

Technologies:<br />
Database  - MySQL<br />
Backend   - Springboot<br />
Interface - RESTful API<br />
Frontend  - Angular<br />

Languages:<br />
Java<br />
SQL<br />
Typescript<br />
Javascript<br />
HTML<br />
CSS<br />

Versions:
Angular CLI 13.0.4
NodeJS 16.10.0
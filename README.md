# employeemanagerapp

EMPLOYEE MANAGER APPLICATION
Spring boot and Angular employee management web app.

employeemaner folder - backend spring boot
employeemanagerapp folder - frontend angular
requires a database connection on localhost 3306 with the following table setup:
    schema: employeemanager
    table: employee
    id: bigint PRIMARY
    email: varchar
    employeeCode: varchar
    img_url: varchar
    job_title: varchar
    name: varchar
    phone: varchar

The function of this applicaion is to use CRUD operations on a list of employees.
Employee profiles are persisted on a MySQL database.
The backend services interact with the data from the database to create new entries, update existing entires, get entries or delete entries.
The frontend call these backend services and uses it's functionality on a client side GUI web page.
Users can use a tile based GUI to interact with each employee profile. Where action can be made to edit or delete per profile tile or add new employees from the nav bar.
It is also possible to search for employees using a nav bar search function. The results will update live on the page as the search bar is being updated.

MySQL DB <-> Spring boot backend <-> Angular frontend.

Technologies:
Database  - MySQL
Backend   - Springboot
Interface - RESTful API
Frontend  - Angular

Languages:
Java
SQL
Typescript
Javascript
HTML
CSS
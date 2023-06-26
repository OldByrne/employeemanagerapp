package com.davidbyrne.employeemanager.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity //maps to a class to a DB using JPA. important for a model class
public class Employee implements Serializable { //good for this class as it will be passed around streams a lot (from database etc)
    @Id //maps ID variable as the DB ID
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generated IDs using the identity strategy
    @Column(nullable = false, updatable = false) //means cannot have null value and cannot be changed
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imgUrl;
    @Column(nullable = false, updatable = false)
    private String employeeCode;

    public Employee() {
    }

    public Employee(Long id, String name, String email, String jobTitle, String phone, String imgUrl, String employeeCode) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imgUrl = imgUrl;
        this.employeeCode = employeeCode;
    }

    public Long getID() {
        return id;
    }

    public void setID(Long ID) {
        this.id = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String toString(){
        return "Employee{" +
                "id=" + id +
                "name=" + name + '\'' +
                "email" + email + '\'' +
                "jobTitle" + jobTitle + '\'' +
                "phone" + phone + '\'' +
                "imgUrl" + imgUrl + '\'' +
                '}';
    }

}

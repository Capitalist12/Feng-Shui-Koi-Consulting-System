package com.example.Feng_Shui_Koi_Consulting_System.dto.request;

import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public class UserUpdateRequest {
    @Size(min = 5, max = 20)
    String password;
    String email;
    LocalDate dob;
    Integer elementID;
    String imageID;
    String planID;

    public @Size(min = 5, max = 20) String getPassword() {
        return password;
    }

    public void setPassword(@Size(min = 5, max = 20) String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getElementID() {
        return elementID;
    }

    public void setElementID(Integer elementID) {
        this.elementID = elementID;
    }

    public String getImageID() {
        return imageID;
    }

    public void setImageID(String imageID) {
        this.imageID = imageID;
    }

    public String getPlanID() {
        return planID;
    }

    public void setPlanID(String planID) {
        this.planID = planID;
    }
}

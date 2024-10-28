import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = ({ children }) => {
    const navigation = useNavigate();
    const localData = localStorage.getItem('accessToken');
    const isAdmin = JSON.parse(localData)?.role?.toUpperCase();


  useEffect(() => {
    if (isAdmin !== "ADMIN") {
      navigation("/dashboard");
    }
  }, []);

  return children;
};

export default Admin;

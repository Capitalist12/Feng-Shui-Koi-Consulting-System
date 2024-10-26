import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = ({ children }) => {
    const navigation = useNavigate();
    const isAdmin = useSelector((store) => store?.user?.roleName)?.toUpperCase();


    useEffect(() => {
        if (isAdmin !== "ADMIN") {
            navigation("/login");
        }
    }, []);
    
    return children;
};

export default Admin;
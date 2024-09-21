import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(true);

    const navigation = useNavigate();

    useEffect(() => {
        if(!isAdmin){
            navigation("/login");
        }
    }, []);

    return <Outlet/>

}

export default Admin;
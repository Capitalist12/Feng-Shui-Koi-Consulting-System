// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Admin = ({ children }) => {
//   const navigation = useNavigate();
//   const localData = localStorage.getItem("accessToken");
//   const isMember = JSON.parse(localData)?.role;

//   useEffect(() => {
//     if (isMember !== "MEMBER") {
//       navigation("/errorMem");
//     }
//   }, []);

//   return children;
// };

// export default Admin;

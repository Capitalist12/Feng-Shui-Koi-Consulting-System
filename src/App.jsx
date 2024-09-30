import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/RegisterPage";
import UserManagement from "./components/CRUD_User/index";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/user/profile/ProfilePage";
import TankManagement from "./components/CRUD_Tank/TankManagement";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "dashboard",
      element: <DashboardPage />,
      children: [
        {
          path: "koi",
          element: <DashboardPage />,
        },
        {
          path: "user",
          element: <UserManagement />,
        },
        {
          path: "tank",
          element: <TankManagement />,
        },
      ],
    },
    {
      path: "user",
      element: <ProfilePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/RegisterPage";
import UserManagement from "./components/CRUD_User/index";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/user/profile/ProfilePage";
import TankManagement from "./components/CRUD_Tank/TankManagement";
import Admin from "./utils/AdminRoute/Admin";

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
          element: <DashboardPage/>
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
<<<<<<< HEAD
      path: "user",
      element: <UserPage />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
=======
      path: 'user',
      element: <ProfilePage/>
    }
    
>>>>>>> ae44a6f9277a1fdd0c77b2944c8972fb7bbe6a1c
  ]);

  return <RouterProvider router={router} />;
};

export default App;

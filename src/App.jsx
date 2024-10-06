import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import UserProfilePage from "./pages/user/profile/UserProfilePage";
import TankManagement from "./components/CRUD_Tank/TankManagement";
import Admin from "./utils/AdminRoute/Admin";
import KoiContainer from "./components/CRUD_KoiFish/KoiContainer";

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
          element: <KoiContainer/>
        },
        {
          path: "user",
          element: <DashboardPage />,
        },
        {
          path: "tank",
          element: <TankManagement />,
        },
      ],
    },
    {
      path: 'user',
      element: <UserProfilePage/>
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;

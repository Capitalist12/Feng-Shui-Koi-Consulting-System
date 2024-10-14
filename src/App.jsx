import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import UserProfilePage from "./pages/user/profile/UserProfilePage";
import TankManagement from "./components/CRUD_Tank/TankManagement";
import Admin from "./components/AdminRoute/Admin";
import KoiContainer from "./components/CRUD_KoiFish/KoiContainer";
import UserManagement from "./components/CRUD_User/UserManagement";
import CompatibilityPage from "./pages/member/CompatibilityPage";
import ManageUser from "./components/CRUD_User2/ManageUser";
import Authenticate from "./components/LoginForm/Authenticate";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "compatibility",
      element: <CompatibilityPage />,
    },

    {
      path: "login",
      element: <LoginPage />,
      children: [
        {
          path: "authenticate",
          element: <Authenticate />
        }
      ]
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "dashboard",
      element: (
        <Admin>
          <DashboardPage />
        </Admin>
      ),
      children: [
        {
          path: "koi",
          element: <KoiContainer />,
        },
        {
          path: "users",
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
      element: <UserProfilePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

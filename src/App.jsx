import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/index";
import UserManagement from "./pages/admin/user-management/index";
import LoginPage from "./pages/login/LoginPage";
import Admin from "./components/AdminRoute/Admin";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/user/profile/ProfilePage";
import UserPage from "./pages/user/UserPage";
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
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "dashboard/user",
          element: <UserManagement />,
        },
      ],
    },
    {
      path: "user",
      element: <UserPage />,
      children: [
        {
          path: "user/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

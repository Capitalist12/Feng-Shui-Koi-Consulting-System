import './App.css'
import DashboardPage from './pages/DashboardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register/index'
import UserManagement from './pages/admin/index'
import LoginPage from './pages/LoginPage';
import Admin from './components/AdminRoute/Admin';
import HomePage from './pages/HomePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />
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
          element: <DashboardPage />
        },
        {
          path: "user",
          element: <UserManagement />,
        }
      ]
    }

  ]);

  return <RouterProvider router={router} />
};

export default App;

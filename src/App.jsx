import './App.css'
import DashboardPage from './pages/DashboardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register/index'
import LoginPage from './pages/LoginPage';
import Admin from './components/AdminRoute/Admin';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

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
      path: "userdetail",
      element: <ProfilePage/>
    },
    {
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "dashboard/koi",
          element: <DashboardPage />
        },
        {
          path: "dashboard/user",
          element: <DashboardPage />,
        }
      ]
    }

  ]);

  return <RouterProvider router={router} />
};

export default App;

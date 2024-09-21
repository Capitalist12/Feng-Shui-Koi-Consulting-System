import './App.css'
import DashboardPage from './pages/DashboardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Admin from './components/AdminRoute/Admin';
import HomePage from './pages/HomePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "login",
      element: <LoginPage/>
    },
    {
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />
        }
      ]
    }

  ]);

  return <RouterProvider router={router} />
};

export default App;

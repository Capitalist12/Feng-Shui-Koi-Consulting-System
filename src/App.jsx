import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserManagement from "./pages/admin";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <UserManagement />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

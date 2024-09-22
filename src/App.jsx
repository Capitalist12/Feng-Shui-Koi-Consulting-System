import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserManagement from "./pages/admin";
import RegisrerPage from "./pages/register";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <UserManagement />,
    },
    {
      path: "/register",
      element: <RegisrerPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

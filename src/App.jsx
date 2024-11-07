import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import UserProfilePage from "./pages/user/profile/UserProfilePage";
import TankManagement from "./components/CRUD_Tank/TankManagement";
import Admin from "./components/AdminRoute/Admin";
import KoiContainer from "./components/CRUD_KoiFish/KoiContainer";
import UserManagement from "./components/CRUD_User2/UserManagement";
import CompatibilityPage from "./pages/member/CompatibilityPage";
import Authenticate from "./components/LoginForm/Authenticate";
import AdvertisementPage from "./pages/member/AdvertisementPage";
import PricingPage from "./pages/payment/PricingPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogContent from "./components/Blog/BlogContent";
import Blogs from "./components/Blog/Blogs";
import Member from "./components/MemberRoute/Member";
import ErrorMember from "./pages/error/ErrorMember";
import Statistic from "./components/Overview/Statistic";
import AdvertiseManagementContainer from "./components/Advertise/AdvertiseManagementContainer";
import PaymentSuccessPage from "./pages/payment/PaymentSuccessPage";
import UserAds from "./pages/user/history/UserAds";
import AdDetails from "./components/Advertisement/AdDetails";
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
      path: "pricing",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <PricingPage />,
        },
        
      ]
    },
    {
      path: "success-subscription",
      element: <PaymentSuccessPage />,
    },
    {
      path: "blog",
      element: <BlogPage />,
      children: [
        {
          path: "",
          element: <Blogs />,
        },
        {
          path: ":blogId",
          element: <BlogContent />,
        },
      ],
    },
    {
      path: "ad",
      element: <AdvertisementPage />,
    },
    {
      path: "ad/:adID",
      element: <AdDetails />,
    },

    {
      path: "login",
      element: <LoginPage />,
      children: [
        {
          path: "authenticate",
          element: <Authenticate />,
        },
      ],
    },
    {
      path: "signup",
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
          path: "statistic",
          element: <Statistic />,
        },
        {
          path: "users",
          element: <UserManagement />,
        },
        {
          path: "tank",
          element: <TankManagement />,
        },
        {
          path: "koi",
          element: <KoiContainer />,
        },
        {
          path: "advertise",
          element: <AdvertiseManagementContainer />,
        },
      ],
    },
    {
      path: "user",
      element: <UserProfilePage />,
    },
    {
      path: "/my-ads",
      element: <UserAds />,
    },
    {
      path: "errorMem",
      element: <ErrorMember />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

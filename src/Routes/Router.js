import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment";
import MyAppoinment from "../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import AdminRoute from "./PrivateRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/appoinment", element: <Appoinment></Appoinment>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <Signup></Signup>
            }
            
        ],
        
    },
    {
        path: "/dashboard", element: <DashboardLayout></DashboardLayout>, children:
        [
            {
                path: "/dashboard",
                element: <PrivateRoute><MyAppoinment></MyAppoinment></PrivateRoute>
            },
            {
                path: "/dashboard/users",
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: "/dashboard/adddoctor",
               element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: "/dashboard/managedoctor", 
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
            
        ]
    }
    
])
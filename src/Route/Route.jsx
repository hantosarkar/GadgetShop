import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Page/Overview";
import Product from "../Page/Product";
import ProductDetails from "../Component/Product/ProductDetails";
import About from "../Page/About";
import ContactUs from "../Page/ContactUs";



const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Product",
                element:<Product></Product>
            },
            {
                path: "/About",
                element:<About></About>
            },
            {
                path: "/Contact",
                element:<ContactUs></ContactUs>
            },
            {
                path: "/ProductDetails/:_id",
                element:<ProductDetails></ProductDetails>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/Register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/Dashboard",
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: "/Dashboard",
                element: <Overview></Overview>
            }
           
        ]
    }
])

export default Routes;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Page/Overview";



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

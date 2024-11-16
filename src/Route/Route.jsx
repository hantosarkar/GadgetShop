import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Page/Login";
import Register from "../Page/Register";



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
    }
])

export default Routes;

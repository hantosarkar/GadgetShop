import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Root from "../Page/Root";


const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Routes;

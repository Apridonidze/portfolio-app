import Main from "../routes/Main";
import Project from "../routes/Project";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {path: "/" , element: <Main />},
    {path: "/:projectId" , element: <Project/>},
    {path: "/*" , element: <Main />}
])

export default function AppRouter(){
    return(
        <RouterProvider router={router}/>
    );
};
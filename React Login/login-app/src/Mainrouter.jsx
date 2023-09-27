import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";



const Mainrouter = createBrowserRouter([
    {
        path:"/" ,
        element:<><Navbar /><Home /></>
    },
    {
        path:"/register" ,
        element:<><Navbar /><Register /></>
    },
    {
        path:"/login" ,
        element:<><Navbar /><Login /></>
    }
])
export default Mainrouter;
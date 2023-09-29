import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Adminedit from "./Adminedit";



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
    },
    {
        path:"/admin" ,
        element:<><Navbar /><Admin /></>
    },
    {
        path:"/adminedit/:userid" ,
        element:<><Navbar /><Adminedit /></>
    }
])
export default Mainrouter;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Adminedit from "./Adminedit";
import Admindetail from "./Admindetails";
import Bussiness from "./Bussiness";



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
    },
    {
        path:"/admindetail/:userid" ,
        element:<><Navbar /><Admindetail /></>
    },
    {
        path:"/bussiness" ,
        element:<><Navbar /><Bussiness /></>
    }
])
export default Mainrouter;
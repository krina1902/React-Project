// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import Homeshop from "./Homeshop";
import Unmount from "./Practice/Unmount";
import Animation from "./Practice/Animation";

const App = createBrowserRouter([
{
  path:"/" ,
  element:<><Homeshop /></>
},
{
  path:"/unmount" ,
  element:<><Unmount /></>
},
{
  path:"/animation" ,
  element:<><Animation /></>
}
])
export default App;
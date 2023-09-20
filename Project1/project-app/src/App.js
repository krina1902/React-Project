import React from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import "./Crud.css";
import Userdata from './Userdata';
import Adduser from './Adduser';

function App() {
  return (
    <>
    
    <h1>API CURD</h1>
    
    <BrowserRouter>
    <Routes>
      <Route path='/userdata' element={<Userdata/>}/>
      <Route path='/adduser' element={<Adduser/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

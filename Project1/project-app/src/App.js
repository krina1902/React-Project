import React from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import "./Crud.css";
import Userdata from './Userdata';
import Adduser from './Adduser';
import Userdetail from './Userdeatil';
import Useredit from './Useredit';

function App() {
  return (
    <>
    
    <h1>API CURD</h1>
    
    <BrowserRouter>
    <Routes>
      <Route path='/userdata' element={<Userdata/>}/>
      <Route path='/adduser' element={<Adduser/>}/>
      <Route path='/userdetail/:userid' element={<Userdetail/>}/>
      <Route path='/useredit/:userid' element={<Useredit/>}/>



    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

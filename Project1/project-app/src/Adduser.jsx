import React, { useState } from 'react';
import "./Crud.css";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';

export default function Adduser() {
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    function savedata(){
        let data = {id,name,email,password}
        fetch("http://localhost:3030/user",{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
                setEmail("")
                setPassword("")
                navigate("/userdata")
            })
            
        })
       
    }
    
  return (
    <>
    <h1>Add User</h1>
    <form>
        <MDBInput id='form4Example1'value={id} onChange={(e)=>setId(e.target.value)} disabled wrapperClass='mb-4' label='Id' />
      <MDBInput id='form4Example2'value={name} onChange={(e)=>setName(e.target.value)}  wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example3' wrapperClass='mb-4'value={email} onChange={(e)=>setEmail(e.target.value)}  label='Email address' />
      <MDBInput type='password' id='form4Example4' value={password} onChange={(e)=>setPassword(e.target.value)}  wrapperClass='mb-4' label='Password' />
      <MDBBtn type='submit' className='mb-4' block onClick={savedata}>
        Add User
      </MDBBtn>
    </form>
    </>
  );
}
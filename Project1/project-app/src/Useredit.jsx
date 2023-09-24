import React from "react";
import "./Crud.css";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate,useParams,Link } from 'react-router-dom';
import { useState,useEffect } from "react";


const Useredit = () => {
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {userid} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:3030/user/" + userid).then((data)=>{
            return data.json().then((resp)=> {
                console.log(resp);
                setId(resp.id);
                setName(resp.name);
                setEmail(resp.email);
                setPassword(resp.password);
            }).catch((error)=>{
                console.log(error.msg);
            })
        })
    },[])

    function savedata(){
        let data = {id,name,email,password}
        fetch("http://localhost:3030/user/" + userid,{
            method:"PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
            navigate("/userdata")
            })
            
        })
       
    }
    
    return ( 
        <>
        <h1>User Edit</h1>
        <form>
        <MDBInput id='form4Example1'value={id} onChange={(e)=>setId(e.target.value)} disabled wrapperClass='mb-4' label='Id' />
      <MDBInput id='form4Example2'value={name} onChange={(e)=>setName(e.target.value)}  wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example3' wrapperClass='mb-4'value={email} onChange={(e)=>setEmail(e.target.value)}  label='Email address' />
      <MDBInput type='password' id='form4Example4' value={password} onChange={(e)=>setPassword(e.target.value)}  wrapperClass='mb-4' label='Password' />
      <MDBBtn type='submit' className='mb-4' block onClick={savedata}>
        Edit User
      </MDBBtn>
      <li><Link to="/userdata">Back To Userdata</Link></li>
    </form>
        </>
     );
}
 
export default Useredit;
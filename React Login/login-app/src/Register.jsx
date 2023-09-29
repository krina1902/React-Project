import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [id,setId] = useState("")
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    function userregister(){
        let data = {id,name,email,password,role:2}
        fetch("http://localhost:4000/users",{
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
                navigate("/login")
            })
            
        })
       
    }
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8'>

          <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
              <MDBInput wrapperClass='mb-4' label='Id' disabled value={id} onChange={(e)=>setId(e.target.value)} id='form1' type='text'/>

              <MDBInput wrapperClass='mb-4' label='Name'value={name} onChange={(e)=>setName(e.target.value)} id='form1' type='text'/>

              <MDBRow>

                <MDBCol >
                  <MDBInput wrapperClass='datepicker mb-4' label='Email'value={email} onChange={(e)=>setEmail(e.target.value)} id='form2' type='text'/>
                </MDBCol>

                

              </MDBRow>

             

              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='Password'value={password} onChange={(e)=>setPassword(e.target.value)} id='form3' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBBtn color='success' className='mb-4' size='lg' onClick={userregister}>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;
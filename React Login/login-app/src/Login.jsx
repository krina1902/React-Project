import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user,setUser] = useState()
  const[password , setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.clear()
  },[])

  const login = () => {
    fetch("http://localhost:4000/users?name=" + user).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        if(resp[0]){
          sessionStorage.setItem("name",user)
          sessionStorage.setItem("role",resp[0].role)
          if(resp[0].role == 1){
            navigate("/admin")
          }
          else{
            navigate("/")
          }
        }
        else{
          alert("invalid user")
        }
      })
    })
  }
  return (
    <MDBContainer fluid className='my-2 w-70'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className=' cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-2 shadow-5 text-center'>

              <h2 className="fw-bold">Sign up now</h2>

              
                <MDBCol>
                  <MDBInput value={user} onChange={(e)=>setUser(e.target.value)} wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                </MDBCol>

              <MDBInput value={password} onChange={(e)=>setPassword(e.target.value)}  wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              

              <MDBBtn className='w-100 mb-4' size='md' onClick={login}>sign up</MDBBtn>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-60 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
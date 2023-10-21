
import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Crud.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,  MDBContainer,
  MDBNavbar,
  MDBInputGroup } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Admin() {

  let user = sessionStorage.getItem("name")
  let role = sessionStorage.getItem("role")
  const navigate = useNavigate()
  

  useEffect(()=>{
    if(user === "" || user === null || role != 1){
      navigate("/login")
    }
  })


    const [userset,setUserset] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:4000/users").then((data)=>{
            return data.json().then((resp)=> {
                console.log(resp);
                setUserset(resp);
            }).catch((error)=>{
                console.log(error.msg);
            })
        })
    },[])

    const [query , setQuery] = useState("")

    const Edit = (id) => {
      navigate("/adminedit/" + id)
  }

    const Detail = (id) => {
        navigate("/admindetail/" + id)
    }

    const Delete = (id) => {
      if(window.confirm("Do You Want Delete User ?")){
        fetch("http://localhost:4000/users/" + id,{
          method:"DELETE"
      }).then((result)=>{
          window.location.reload();
          alert("User Delete Successfully!!!!")
          }).catch((error)=>{
            console.log(error.msg);
          })
          
      }
      }

  return (
    <>
    <h1>Admin Panel</h1>
    <MDBTable align='middle'>
      <MDBTableHead align='middle'>
      <tr>
      <td><Link to="/register"><MDBBtn color='primary' rounded size='sm'className='bt'>Add User</MDBBtn></Link></td>
      </tr>
      <tr>
          <input  placeholder="Search" type='Search' onChange={e => setQuery(e.target.value)} />
      </tr>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>NAME</th>
          <th scope='col'>EMAIL</th>
          <th scope='col'>PASSWORD</th>
          <th scope='col'>ACTIONS</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody align='middle'>
      { 
            userset&&
            userset.filter((item)=> item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query)).map((item)=>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
                <div>
            <MDBBtn color='primary' rounded size='sm'className='bt' onClick={()=>Edit(item.id)}>EDIT</MDBBtn>
            <MDBBtn color='danger' rounded size='sm'className='bt' onClick={()=> Delete(item.id)}>DELETE</MDBBtn>
            <MDBBtn color='warning' rounded size='sm'className='bt' onClick={()=>Detail(item.id)}>DETAILS</MDBBtn>

            </div>
            </td>
            </tr>
        )
        }
      </MDBTableBody>
    </MDBTable>
    </>
  );
}
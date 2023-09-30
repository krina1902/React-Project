import React from "react";
import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Admindetail = () => {
    const {userid} = useParams()
    const [userset,setUserset] = useState({})


    useEffect(()=>{
        fetch("http://localhost:4000/users/" + userid).then((data)=>{
            return data.json().then((resp)=> {
                console.log(resp);
                setUserset(resp);
            }).catch((error)=>{
                console.log(error.msg);
            })
        })
    },[])
    return ( 
        <>
        <h1>User Detail</h1>

        {
            userset&&
            <ul class="list-group list-group-light">
                <li class="list-group-item px-3 border-0 rounded-3 list-group-item-info mb-2">User Id:- {userset.id}</li>
                <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">User Name:- {userset.name}</li>
                 <li class="list-group-item px-3 border-0 rounded-3 list-group-item-secondary mb-2">User Email:- {userset.email}</li>
                 <li class="list-group-item px-3 border-0 rounded-3 list-group-item-success mb-2">User Password:- {userset.password}</li>
                <li><Link to="/admin">Back To Admin Panel</Link></li>

            </ul>
        }
        
        </>
     );
}
 
export default Admindetail;
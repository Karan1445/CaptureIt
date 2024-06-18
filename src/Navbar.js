import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBell, FaUser } from 'react-icons/fa';
import './App.css';

export default function Navbar(){
    const[notify,setNotification]=useState([]);
    const [Counts,setcounts]=useState(0);
    useEffect(()=>{
      fetch("http://localhost:6060/Approve/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((datas)=>setcounts(datas.length))
      fetch("http://localhost:4040/notify/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((d1)=>{setNotification(d1)})
      
    },[])
    function back(){
        localStorage.clear()
            
    }

    return(
        <>
        <nav class="navbar  sticky-top navbar-light bg-light navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/Home"}>Hii,...{localStorage.getItem("userName")}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/myCem"}>My Cemera</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/MyHired"} >Renteds</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/Approvals"} >Apporve <span class="badge text-bg-primary">{Counts}</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/newCemera"}>Add Cemera</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link" to={"/"} onClick={back}>Logout</Link>
        </li>
      </ul>
    </div>
    <div class="nav-item">
    <Dropdown as={ButtonGroup}>
      
      <Dropdown.Toggle variant="" id="" className="addcss">
      <FaUser />  
      </Dropdown.Toggle>
      <Dropdown.Menu>
     
      <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
      <Dropdown.Item href="/notify">My Notification</Dropdown.Item>
      
    
        
       
      </Dropdown.Menu>
    </Dropdown>
        </div>
  </div>
</nav>
        </>
    )
}
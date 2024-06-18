import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCamera, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin(){
    const navigate=useNavigate();
const [totalUsers,settotalUsers] = useState(10); // Replace with actual data
    const [totalCameras,settotalCameras ]= useState(10); // Replace with actual data
    const [totalApprovals,settotalApprovals ]= useState(10); // Replace with actual data
    const [totalDeclines,settotalDeclines ]= useState(10); 


    useEffect(()=>{
        fetch("http://localhost:8080/all").then((res)=>res.json()).then((newdata)=>settotalUsers(newdata.length));
        fetch("http://localhost:6060/getAll").then((res)=>res.json()).then((datas)=>settotalCameras(datas.length));
        fetch("http://localhost:4040/acount").then((res)=>res.json()).then((dat)=>settotalApprovals(dat));
        fetch("http://localhost:4040/dcount").then((res)=>res.json()).then((date)=>settotalDeclines(date));
    },[])
    return(<>
    
    <h1 className='d-flex text-primary'><u>welcome, Admin..</u></h1>
  <div className="dashboard container mt-5">
  
      <div className="card users" onClick={()=>{navigate("/admin/user")}}>
        <FontAwesomeIcon icon={faUsers} size="3x" />
        <h2>Total Users</h2>
        <p>{totalUsers}</p>
      </div>
      <div className="card cameras" onClick={()=>{navigate("/admin/Cemera")}}>
        <FontAwesomeIcon icon={faCamera} size="3x" />
        <h2>Total Cameras</h2>
        <p>{totalCameras}</p>
      </div>
      <div className="card approvals" onClick={()=>{navigate("/admin/user")}}>
        <FontAwesomeIcon icon={faThumbsUp} size="3x" />
        <h2>Total Approvals</h2>
        <p>{totalApprovals}</p>
      </div>
      <div className="card declines" onClick={()=>{navigate("/admin/user")}}>
        <FontAwesomeIcon icon={faThumbsDown} size="3x" />
        <h2>Total Declines</h2>
        <p>{totalDeclines}</p>
      </div>
    </div>
    </>)
}
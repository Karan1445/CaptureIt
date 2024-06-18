import { useEffect, useState } from "react"
import UserDisplay from "./UserAdminDisplay";
import { Link } from "react-router-dom";

export default function Useradmin(){

    const [user,setuser]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/all").then((res)=>res.json()).then((newdata)=>setuser(newdata))
    
    },[])

    return(<>
        <div className="container ">
        <Link  to={"/admin"} className="btn btn-dark mt-3 mb-3">Back</Link>
            <div className="row bg-danger-subtle mb-3">
                <div className="col h6 ">Name</div>
                <div className="col h6">Email</div>
                <div className="col h6">Password</div>
                <div className="col h6">Contact No</div>
                <div className="col h6">Warn</div>
                <div className="col h6">Update</div>
                <div className="col h6">Delete</div>
            </div>
            {
                user.map((item)=>{
                    return (<><UserDisplay {...item}/></>)
                })
            }
        </div>
    </>)
}
import { useEffect, useState } from "react"
import CemDisplay from "./AdminCemera";
import { Link } from "react-router-dom";

export default function Cemeraadmin(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:6060/getAll").then((res)=>res.json()).then((datas)=>setData(datas));
    },[])
    return(<>
     <div className="container ">
            <Link  to={"/admin"} className="btn btn-dark mt-3 mb-3">Back</Link>
            <div className="row bg-danger-subtle mb-3">
                <div className="col h6 ">Cemera Name</div>
                <div className="col h6">price</div>
                <div className="col h6">City</div>
                <div className="col h6">owner</div>
                <div className="col h6">Status</div>
                <div className="col h6">approval</div>
                <div className="col h6">Update</div>
                <div className="col h6">Delete</div>
            </div>
            {
                data.map((item)=>{
                    return (<><CemDisplay {...item}/></>)
                })
            }
        </div>
    </>)
} 
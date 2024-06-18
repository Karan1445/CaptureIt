import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Approvaldisplay from "./Approvaldisplay";

export default function Approval(){

    const [data,setdata]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:6060/Approve/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((datas)=>setdata(datas))
    },[])
    return(<>
        <Navbar/>
        <div className="container">
            <div className="row">
                {
                    data.map((item)=>{
                        return(<>
                        <Approvaldisplay {...item}/>
                        </>)
                    })
                }
            </div>
        </div>
        </>)
}
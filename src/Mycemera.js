import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Mycam from "./Mycamdisplay";

export default function Mycemera(){

    const[data,setdata]=useState([])

    useEffect(()=>{
        fetch("http://localhost:6060/UsersCemera/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((ress)=>setdata(ress))
    },[])

    return(<>
    <Navbar/>
    <div className="container">
        <div className="row">
            {
                data.map((item)=>{
                    return(<>
                    <Mycam {...item}/>
                    </>)
                })
            }
        </div>
    </div>
    </>)
}
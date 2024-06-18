import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DisplayNotify from "./DisplayNotify";

export default function Notify(){

    const[notify,setNotification]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:4040/notify/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((d1)=>{setNotification(d1)})
    
    },[])
    const rev=[...notify].reverse()

    
    return(<>
    <Navbar/>
    <div className='container'>       
         <div className='row'>
            
            {
               
                rev.map((item)=>{
                    return(<DisplayNotify {...item}/>)
                 })
            }
        </div>
        </div>

    </>)
}
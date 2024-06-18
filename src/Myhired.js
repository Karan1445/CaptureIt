import { useEffect, useState } from "react"
import Hireddisplay from "./Hireddisplay"
import Navbar from "./Navbar";

export default function Myhired(){

    const [cemeradata,setCemeraData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:6060/UserHiredCem/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then((cemeraDatafromApi)=>setCemeraData(cemeraDatafromApi));
    },[])

    return(<>
     <Navbar/>
    <div className="container">
        <div className="row">
            {
                cemeradata.map((item)=>{
                    return(<>
                    <Hireddisplay {...item}/>
                    </>)
                })
            }
        </div>
    </div></>)
}
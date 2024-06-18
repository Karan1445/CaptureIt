import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DisaplayCemera from './DisaplayCemera';

export default function Home(){
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/login/"+localStorage.getItem("contactNumber")).then((res)=>res.json()).then(
            (newdata)=>{
                if(newdata.length==0){
                    localStorage.clear()
                    navigate("/")
                }
            })
       
        fetch("http://localhost:6060/getAllCemeras").then((res)=>res.json()).then((datas)=>setData(datas));
        if(localStorage.getItem("userName")==undefined){
            navigate("/")
        }
    },[]);

    // function Back(){loguut logic
    //     localStorage.clear()
    //     navigate("/")
    // }

    return(
       <>
       <Navbar/>
       <div className='container'>       
         <div className='row'>
            {
                data.map((item)=>{
                    return(<DisaplayCemera {...item}/>)
                 })
            }
        </div>
        </div>
        </>
    )   
}
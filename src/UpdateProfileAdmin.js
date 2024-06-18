import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatepAdmin(){
    const [Data,SetData]=useState({});
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        fetch("http://localhost:8080/login/"+id).then((res)=>res.json()).then((newdata)=>SetData(newdata[0]))
        
    },[])
    console.log(Data)
    function submits(e){
        e.preventDefault()
        

        if(Data.userName=="undefined"){ 
            Data.userName=localStorage.getItem("userName")
        }
        if(Data.passWord=="undefined"){ 
            Data.passWord=localStorage.getItem("passWord")
        }
        if(Data.emailAddress=="undefined"){ 
            Data.userName=localStorage.getItem("emailAddress")
        }
        if(Data.city=="undefined"){ 
            Data.city=localStorage.getItem("city")
        }
        console.log(Data)
        fetch("http://localhost:8080/update",{
          method:"put",
          headers:{ 'Content-Type': 'application/json',},
          body:JSON.stringify({...Data})
        }).then(()=>{
            localStorage.clear()
            
        }).then(()=>{
        localStorage.setItem("userName",Data.userName)
          localStorage.setItem("passWord",Data.passWord)
          localStorage.setItem("contactNumber",Data.contactNumber)
          localStorage.setItem("emailAddress",Data.emailAddress)
          localStorage.setItem("city",Data.city)
        navigate("/admin/user");
        })
    
      }
      function getData(e){
        SetData({...Data,[e.target.name]:e.target.value});
      }
    return(<>
    <div className="container  bg-danger-subtle mt-5  ">
          <div className="col d-flex justify-content-center">
                            <span className="h2 font-weight-light"><u>Hello..{localStorage.getItem("userName")}</u></span>
                        </div>
        <form onSubmit={(e)=>submits(e)}>
          <div className="row ">
            <div className="col">

                <div className="row mt-5 ">
                  <div className="col d-flex justify-content-center">UserName:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="text" name='userName'  defaultValue={Data.userName} onChange={(e)=>getData(e)} />
                  </div>
                  </div>


                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">password:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="text" name='passWord' defaultValue={Data.passWord} onChange={(e)=>getData(e)}/>
                  </div>
                  </div>
                

                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">email Address:</div>
                <div className="col d-flex justify-content-center">
                  <input required  type="email" name='emailAddress' defaultValue={Data.emailAddress}  onChange={(e)=>getData(e)}/>
                  </div>
                  </div>
                

                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">City Name:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="text" name='city' defaultValue={Data.city} onChange={(e)=>getData(e)}/>
                  </div>
                  </div>

                  
                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center"></div>
                <div className="col d-flex justify-content-center">
                <input className="btn btn-dark"type='submit' name="login" value="update" />
                  </div>
                  </div>
                  
          </div>
          </div>
        </form>
      </div>
    </>)
}
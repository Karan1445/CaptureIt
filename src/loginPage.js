import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function LoginPage(){
      const [Data,SetData]=useState({});
      const [Texts,setTexts]=useState("")
      const[flag,setFlag]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("userName")!=undefined){
            navigate("/home")
        }
        
    },[])


      function getData(e){
        SetData({...Data,[e.target.name]:e.target.value});
      }
      function submits(e){
        e.preventDefault()
        


        fetch("http://localhost:8080/addUser",{
          method:"post",
          headers:{ 'Content-Type': 'application/json',},
          body:JSON.stringify({...Data})
        }).then(()=>{
          localStorage.setItem("userName",Data.userName)
          localStorage.setItem("passWord",Data.passWord)
          localStorage.setItem("contactNumber",Data.contactNumber)
          localStorage.setItem("emailAddress",Data.emailAddress)
          localStorage.setItem("city",Data.city)
        }).then(()=>{
        navigate("/Home");
        })
      }
    
      function logs(e){
        e.preventDefault()
        if(Data.contactNumber=="admin" && Data.passWord=="admin"){
          navigate("/admin")
        }else{
        fetch("http://localhost:8080/login/"+Data.contactNumber).then(res=>res.json()
    ).then((datas)=>{
        if(datas[0]!=null){

        
        if(Data.passWord===datas[0].passWord){
            localStorage.setItem("userName",datas[0].userName)
            localStorage.setItem("passWord",datas[0].passWord)
            localStorage.setItem("contactNumber",datas[0].contactNumber)
            localStorage.setItem("emailAddress",datas[0].emailAddress)
            localStorage.setItem("city",datas[0].city)
            navigate("/home")
        }
        else{
            setTexts("false password");
        }
    }
    })
        }
      }
    
      return (
        <>
        {
        flag==0?
        <div className="container  bg-primary-subtle mt-5  ">
          <div className="col d-flex justify-content-center">
                            <span className="h2 font-weight-light"><u>Hello User</u></span>
                        </div>
        <form onSubmit={(e)=>submits(e)}>
          <div className="row ">
            <div className="col">

                <div className="row mt-5 ">
                  <div className="col d-flex justify-content-center">UserName:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="text" name='userName' onChange={(e)=>getData(e)} />
                  </div>
                  </div>


                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">password:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="password" name='passWord'  onChange={(e)=>getData(e)}/>
                  </div>
                  </div>
                  
                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">Cotnact Number:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="number" name='contactNumber' onChange={(e)=>getData(e)}/>
                  </div>
                  </div>


                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">email Address:</div>
                <div className="col d-flex justify-content-center">
                  <input required  type="email" name='emailAddress'  onChange={(e)=>getData(e)}/>
                  </div>
                  </div>

                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">City Name:</div>
                <div className="col d-flex justify-content-center">
                  <input  required type="text" name='city'  onChange={(e)=>getData(e)}/>
                  </div>
                  </div>

                  
                  <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center"><input className="btn btn-dark"type='submit' name="login" value="Login" /></div>
                <div className="col d-flex justify-content-center">
                  
                  <button className="btn btn-dark"onClick={()=>{setFlag(1)}}>Sign in</button>
                  </div>
                  </div>
                  
          </div>
          </div>
        </form>
      </div>
      
      :
      <div className="container  bg-primary-subtle mt-5  ">
      <div className="col d-flex justify-content-center">
                        <span className="h2 font-weight-light"><u>Hello User</u></span>
                    </div>
      <form onSubmit={(e)=>logs(e)}>

      <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">Cotnact Number:</div>
                <div className="col d-flex justify-content-center">
        <input type="text" name='contactNumber' onChange={(e)=>getData(e)} required/>
        </div>
        </div>
        <div className="row mt-2 ">
                  <div className="col d-flex justify-content-center">password:</div>
                <div className="col d-flex justify-content-center">
          <input type="password" name='passWord'  onChange={(e)=>getData(e)} required/>
          </div>
          </div>

          <div className="row mt-2 ">
          <div className="col d-flex justify-content-center">
          <input type='submit' value="login" className="btn btn-dark"/>
          </div>

          <div className="col d-flex justify-content-center">
                  
          <button onClick={()=>{setFlag(0)}} className="btn btn-dark">Register</button>
          </div>
          </div>
          <h1>{Texts}</h1>
        </form>
        </div>
              
        }
    
        </>
      );
}

    

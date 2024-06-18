import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { json, useNavigate, useParams } from "react-router-dom"
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";
import { format } from 'date-fns';

export default function Hirecem(){
    const date = new Date();
   const years=format(new Date(),"yyyy-MM-dd hh:mm:ss").toString();
   const plusyears=format(new Date().setDate(date.getDate()+7),"yyyy-MM-dd h:mmm:s").toString();
   const t=format(new Date(),"hh:mm:ss").toString();
   const[alertt,setalertt]=useState(false);
    const [show, setShow] = useState(false);
    const [hours,sethours] =useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate();
    const [cemeraData,setCemeraData]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        if(cemeraData.avail=="f"){
            navigate("/Home")
        }
        fetch("http://localhost:6060/myCemera/"+id).then((res)=>res.json()).then((singleObjectOfCemera)=>setCemeraData(singleObjectOfCemera));
    },[])

    function finalProccessOfBooking(){
        if(hours!=0){ 
            console.log(hours)
        fetch("http://localhost:6060/HireCemera",{
            method:"put",
            headers:{ 'Content-Type': 'application/json',},
   
            body:JSON.stringify({"pickuptime":years,"rentedHours":hours,"_id":cemeraData._id,"avail":"f","reqName":localStorage.getItem("userName"),"reqContact":localStorage.getItem("contactNumber"), "approval":"inProgress"})
        }).then(()=>{
          fetch("http://localhost:4040/notapproved",{
            method:"post",
            headers:{ 'Content-Type': 'application/json',},
            body:JSON.stringify({"contact":localStorage.getItem("contactNumber"),"cemname":cemeraData.cemeraName})
          })
        }).then(
            handleClose()
           
        ).then(()=>navigate("/home"))
    }
    
    }
    function closed(){
        setalertt(true)
    }

    if (alertt) {
        return (
          <Alert variant="danger" className=""  onClose={() => {navigate("/home")}} dismissible>
            <Alert.Heading>Oh snap! You Want to cacel your Purchase??!</Alert.Heading>
            <p>
             By Clicking THis button u can cancel your request of booking Cemer!!!! 
            </p>
          </Alert>
        );
      }
    
    return(<>
    <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col">
                   <h1>Hello,  {localStorage.getItem("userName")}</h1>
                   <h2>This is the process of hiring Cemera Name With <u>{cemeraData.cemeraName}</u></h2>
                    <h3>Your Pickup Location for this cemera is <u>{cemeraData.cemeraCity}</u></h3>
                    <hr/>

                    <h3>After the approval of Owner this Cemera is Rented by you "<b>This May Take Few Moment</b>"</h3>
                    <h5>Click Below Button fore Hire</h5>

                    <hr/>
                    <h5>Owner Name:{cemeraData.owner}</h5>
                    <h5>Owner contact:{cemeraData.ownerContact}</h5>
                    <hr/>
                    {/* <button className="btn btn-info" onClick={finalProccessOfBooking}>Book</button> */}
                    <Button variant="primary" onClick={handleShow}>
                Book Cemera
      </Button>
            
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is the final Step of Your Hiring..</Modal.Title>
        </Modal.Header>
        <Modal.Body><h6>Plese Choose Hours you like to rent this Cemera</h6>
        <input  required id="rangehours" className="form-range w-50" type="range" min={1} max={10}  onChange={(e)=>{sethours(e.target.value);
            console.log(t)
        }}/><p>{hours}-Hours</p>
        <hr/>
        <h6>Please Enter your pickup Time/hour</h6>
        <input type="time" min={t} required/>
        <hr/>
        <h6>Approx Payout is:- {cemeraData.CemeraPrice *hours} $ -:</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closed}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={finalProccessOfBooking}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
      <form/>
              
                </div>

            </div>

        </div>
    </>)
}
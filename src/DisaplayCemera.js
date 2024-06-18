import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DisaplayCemera(props){
    const[like,Setlike]=useState(0)
    const[css,setCss]=useState("btn")
    const navigate=useNavigate();
    function likes(){
        
        if(like!=0){
            // fetch("http://localhost:6060/like",{
            //     method:"put",
            //     headers:{ 'Content-Type': 'application/json',},
            //     body:{"_id":props._id,"like":props.like}
            // })
           Setlike(0)
           setCss("btn")
        }
        else{
            setCss("btn btn-danger")
            Setlike(1)
        }
    }

    return(<>
       <div class="col-3 ">
        <div class="card card-custom" >
            <img src={props.cemeraLink}  class="card-img-top" alt="Photo" />
            <div class="card-body text-center">
                <h5 class="card-title">{props.cemeraName}</h5>
                <p className="card-text">
            <FontAwesomeIcon icon={faDollarSign} className="icon" /> Price per hour: <FontAwesomeIcon icon={faClock} className="icon" /> ${props.CemeraPrice}
          </p><p className="card-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Location:{props.cemeraCity}
          </p>
                {props.ownerContact==localStorage.getItem("contactNumber")?"":<Link className="btn  btn-primary" to={"/HireCem/"+props._id}>Book Now</Link>}
            </div>
        </div>
    </div>
    {/* <div class="col-3">
        <div class="card card-custom" >
            <img src={props.cemeraLink} class="card-img-top" alt="Photo" />
            <div class="card-body text-center">
                <h5 class="card-title">{props.cemeraName}</h5>
                <p class="card-text">Price per hour: ${props.CemeraPrice}</p>
                <p class="card-text">Location:{props.cemeraCity}</p>
                <a href="#" class="btn btn-custom">Book Now</a>
            </div>
        </div>
    </div> */}
        {/* <div className="col-3">
        <div class="card" >
  <img class="card-img-top" src={props.cemeraLink} className="rounded " alt="Cemera Image"/>
  <div class="card-body">
    <h5 class="card-title">{props.cemeraName}</h5>
    <h6 class="card-title">{props.CemeraPrice}$/hour</h6>
    <p class="card-text">{props.owner}</p>
    {props.ownerContact==localStorage.getItem("contactNumber")?"":<Link className="btn btn-primary" to={"/HireCem/"+props._id}>Hire</Link>}
    <button className={css} onClick={likes}>Like</button>
   
  </div>
</div>
        </div> */}
    </>)
}
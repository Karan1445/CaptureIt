import { Link, useNavigate } from "react-router-dom"

export default function Mycam(props){

const navigator=useNavigate();
  function deleteOne(){
    fetch("http://localhost:6060/myCemera/"+props._id,{method:"delete"}).then(()=>{window.location.reload()})
  }
  function reavilable(){
    fetch("http://localhost:6060/Disagree",{
      method:"put",
      headers:{ 'Content-Type': 'application/json',},
      body:JSON.stringify({_id:props._id})
  }).then(()=>{
    fetch("http://localhost:4040/complete",{
      method:"post",
      headers:{ 'Content-Type': 'application/json',},
      body:JSON.stringify({"contact":props.reqContact,"cemname":props.cemeraName})
    })
  }).then(()=>{window.location.reload()})
  }
    return(<>
    <br/>
    <br/>
    <div className="col-10">

    <div class="card">
       
  <h5 class="card-header">{props.cemeraName}</h5>
  <div class="card-body">
  <img src={props.cemeraLink} />
    <h5 class="card-title">Price::{props.CemeraPrice}$/hours</h5>
     {props.avail!="t"&&props.approval=="done"?<p class="card-text">This cemera is Hired by:<b>{props.reqName}</b></p>:""}
     {props.avail!="t"&&props.approval=="done"?<p class="card-text">Hirer contact number :+91 <b>{props.reqContact}</b></p>:""}
     {props.avail!="t"&&props.approval=="done"?<p class="card-text">This cemera is picked up at:<b>{props.pickuptime}</b></p>:""}
     {props.avail!="t"&&props.approval=="done"?<p class="card-text">This cemera is hired for :<b>{props.rentedHours}</b>/hours</p>:""}
    {props.avail=="t"?<Link class="btn btn-primary" to={"/edit/"+props._id}>edit</Link>:""}
    {props.avail=="t"? <button className="btn btn-danger" onClick={deleteOne}>delete</button>:""}
    {/* {props.avail=="f"?<button className="btn btn-success">Make Cemera Avilable</button>:""} */}

    {props.avail!="t"?"After reciving Cemera u can Reavilablr your cemera  ":""}

    {props.avail!="t"?<button className="btn btn-dark" onClick={reavilable}>reavilabe</button>:""}
  </div>
</div>
    </div>
    
    </>)
}

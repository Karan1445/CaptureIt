import { useNavigate } from "react-router-dom"

export default function Approvaldisplay(props){
    const navigate=useNavigate()
    function Agrees(){
        fetch("http://localhost:6060/AgreeCemera",{
            method:"put",
            headers:{ 'Content-Type': 'application/json',},
            body:JSON.stringify({_id:props._id})
        }).then(()=>{
            fetch("http://localhost:4040/success",{
                method:"post",
                headers:{ 'Content-Type': 'application/json',},
                body:JSON.stringify({"contact":props.reqContact,"cemname":props.cemeraName})
              })
        }).then(()=>{navigate("/myCem")})
    }
    function decline(){
        fetch("http://localhost:6060/Disagree",{
            method:"put",
            headers:{ 'Content-Type': 'application/json',},
            body:JSON.stringify({_id:props._id})

        }).then(()=>{
            fetch("http://localhost:4040/decline",{
                method:"post",
                headers:{ 'Content-Type': 'application/json',},
                body:JSON.stringify({"contact":props.reqContact,"cemname":props.cemeraName})
              })
        }).then(()=>{navigate("/Home")})
    }
    return(<>
        <br/>
        <br/>
        <div className="col-10">
    
        <div class="card">
           
      <h5 class="card-header">{props.cemeraName}</h5>
      <div class="card-body">
      <img src={props.cemeraLink} />
        <h5>requester is ::{props.reqName}</h5>
        <h5>Contact request :{props.reqContact}</h5>
        <h5>Hire for ::{props.rentedHours}</h5>
        <h5>booked at :{props.pickuptime}</h5>
        <button class="btn btn-info" onClick={Agrees}>Approve</button>
        <button className="btn btn-danger" onClick={decline}>Decline</button>
    
      
      </div>
    </div>
        </div>
        
        </>)
}
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"

export default function Hireddisplay(props){
const links="https://wa.me/"+props.ownerContact
const gmaplink="https://www.google.com/maps?q="+props.pickUpLoc.split(",")[0]+","+props.pickUpLoc.split(",")[1];
const navigator=useNavigate();
//commented this section becuse its copied form display my cam
//   function deleteOne(){
//     fetch("http://localhost:6060/myCemera/"+props._id,{method:"delete"}).then(()=>{window.location.reload()})
//   }
    return(<>
    <br/>
    <br/>
    <div className="col-10">

    <div class="card">
       
  <h5 class="card-header">{props.cemeraName}</h5>
  <div class="card-body">
  <img src={props.cemeraLink} />
    <h5 class="card-title">Contact Here:{props.ownerContact}</h5>
    <p class="card-text">Pickup Cem from here:: <button className="btn btn-info" onClick={()=>window.open(gmaplink,"_blank")}>Google map</button></p>
    
    <Button class="btn btn-success" onClick={()=>window.open(links, '_blank')}>Contact</Button>
    <button className="btn btn-danger" >Drop Complete</button>

  
  </div>
</div>
    </div>
    
    </>)
}

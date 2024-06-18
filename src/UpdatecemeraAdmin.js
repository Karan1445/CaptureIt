import { useNavigate, useParams } from "react-router-dom";
import { useState,useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
export default function UpdateAdminCem(){

    const [cemeraData,setCemeraData]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        fetch("http://localhost:6060/myCemera/"+id).then((resss)=>resss.json()).then((newdata)=>setCemeraData(newdata));
        
    },[])
    console.log(cemeraData)
    //google 
    const [markers, setMarkers] = useState([]);
    const mapContainerStyle = {
      width: '50vw',
      height: '50vh',
    };
    
    const center = {
      lat: 21.986416,
      lng: 70.878861,
    };
    
    const options = {
      disableDefaultUI: true,
      zoomControl: true,
    }
    //map

    const navigator=useNavigate()

    function getData(e){
        setCemeraData({...cemeraData,[e.target.name]:e.target.value});
      }

      async function uploadCemera(e){
        if( markers.length > 0){
          console.log("yupii");
          var strs=(markers[markers.length - 1].lat +","+markers[markers.length - 1].lng).toString();
        e.preventDefault()
     //setData({...data,"owner":localStorage.getItem("userName"),"ownerContact":localStorage.getItem("contactNumber"),"avail":"t","approval":"null","reqName":"null","reqContact":"null","like":"0"})
  fetch("http://localhost:6060/HireCemera",{
            method:"put",
            headers:{ 'Content-Type': 'application/json',},
            body:JSON.stringify({...cemeraData,"pickUpLoc":strs})
        }).then(()=>{
            navigator("/admin/Cemera")
        })
    console.log(cemeraData)
       
    }
  }
    //----------------------------------------------------------------------------------  
    //google map  maybe possiblee
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao', //    API key
    });
    //2nd phase map
    const onMapClick = useCallback((event) => {
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    }, []);
    //error phase
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;
    //-----------------------------------------------------------------------------------------
    return(<>
    
    <div className="container">
        <div className="row">
            <div className="col-3">
    <form onSubmit={(e)=>{uploadCemera(e)}}>
  <div class="form-group">
    <br/>
    <label >Cemera Name</label>
    <input value={cemeraData.cemeraName} required type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter CemeraName" name="cemeraName" onChange={(e)=>getData(e)}/>
  </div>
  <div class="form-group">
    <label>Cemera ImgaeLink</label>
    <input value={cemeraData.cemeraLink} required type="name" class="form-control" id="exampleInputPassword1" placeholder="cemeraLink" name="cemeraLink"onChange={(e)=>getData(e)} />
  </div>
  <div class="form-group">
    <label>Cemera Price</label>
    <input value={cemeraData.CemeraPrice} type="name" class="form-control" id="exampleInputPassword1" placeholder="price per hour" name="CemeraPrice" onChange={(e)=>getData(e)}/>
  </div>
  <label>Pickup Location</label>

{/* {-----------------------------------------google-map---------------------------------------------------------------} */}
<div className="border border-dark"> 
  
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    
    </div>

    {/* {-----------------------------------------google-map---------------------------------------------------------------} */}
  {/* <div class="form-group">
    <label>Pickup Location</label>
    <input required type="name" class="form-control" id="exampleInputPassword1" placeholder="Pickup location" name="pickUpLoc" onChange={(e)=>getData(e)}/>
  </div> */}

  <div class="form-group">
    <label>City Name</label>
    <input value={cemeraData.cemeraCity}required type="name" class="form-control" id="exampleInputPassword1" placeholder="Cemera City" name="cemeraCity" onChange={(e)=>getData(e)}/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">update</button>
</form>
</div>
</div>
</div>

    </>)
}
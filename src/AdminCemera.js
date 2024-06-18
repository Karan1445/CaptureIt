import { Link } from "react-router-dom"

export default function CemDisplay(props){

    function CemeraDelete(){
        fetch("http://localhost:6060/myCemera/"+props._id,{method:"delete"}).then(()=>{window.location.reload()})
    }
    return(<>
     <div className="row bg-info-subtle mt-1">
                <div className="col">{props.cemeraName}</div>
                <div className="col">{props.CemeraPrice}</div>
                <div className="col">{props.cemeraCity}</div>
                <div className="col">{props.owner}</div>
                <div className="col">{props.avail}</div>
                <div className="col">{props.approval}</div>
                <Link className="col btn btn-dark" to={"/admin/cemupdate/"+props._id}>Update</Link>
                <div className="col mx-1 btn btn-dark" onClick={CemeraDelete}>Delete</div>
            </div>
    </>)
}
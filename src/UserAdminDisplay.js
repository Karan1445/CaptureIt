import { Link } from "react-router-dom"

export default function UserDisplay(props){

    function UserDelete(){
        fetch("http://localhost:6060/wholeDataDeleted/"+props.contactNumber,{method:"delete"}).then(
            fetch("http://localhost:4040/deldata/"+props.contactNumber,{method:"delete"}).then(
                fetch("http://localhost:8080/del/"+props._id,{method:"delete"})
            )
        )
        
        .then(()=>{
            
        }).then(window.location.reload())
    }
    function Warns(){
        fetch("http://localhost:4040/warns",{
            method:"post",
            headers:{ 'Content-Type': 'application/json',},
            body:JSON.stringify({"contact":props.contactNumber})
          }).then(alert("Warning sented"))
        }
    return(<>
     <div className="row bg-info-subtle mt-1">
                <div className="col">{props.userName}</div>
                <div className="col">{props.emailAddress}</div>
                <div className="col">{props.passWord}</div>
                <div className="col">{props.contactNumber}</div>
                <div className="col mx-1 btn btn-dark" onClick={Warns}>warn</div>
                <Link className="col mx-1 btn btn-dark"   to={"/admin/profileUpdate/"+props.contactNumber}>Update</Link>
                <div className="col mx-1 btn btn-dark" onClick={UserDelete}>Delete</div>
            </div>
    </>)
}
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Myprofile(){

    const navigat=useNavigate()
    const [info,setInfo]=useState();
    useEffect(()=>{
        
    },[])
    
    return(<>
        <Navbar/>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    
                        <div className="col d-flex justify-content-center">
                            <span className="h2 font-weight-light">Hello,<u>{localStorage.getItem("userName")}</u></span>
                        </div>
                        <div className="row mt-5">
                            <div className="col  d-flex justify-content-center">
                                <div>
                                    <img classname="rounded border border-info" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAANlBMVEXk5ueutLfn6eqpsLPO0tPq7O3h4+Sxt7rd3+C2u77Z293Hy83V2NrLz9HR1Na6v8LAxcejqq5Pu43gAAAEpElEQVR4nO2d2XKkMAxFbRm8sdj9/z87hk7SdICOF4HMFOcpNZWHe2NbkhcxjN3c3Nzc3Nz8h0DbtkzbPqBl+BmoBSUBIBuvxAvlx/CP1LLiACb1YB6CvyOEGfQFTADoxonf6r89uEZXbgHkYLbVf3kwg6zZATQf5c+YploHrTR/qX9aYC211E1gfETpDxOpykGQ/s/Z83LgJbXcFdrF6w8OnK5sEHTc9H85MHU5kCpNf0DVFE8hZfr8UNE6yJE/jQG17m9cngHuqYU/gS5TP+cDtfYJ6LP1c95Tqw9E1g/bKGr1YQASEvAa4anLIrCxBdA2D+p81qZnsHcMrQHoSybQzEjqAEoHgHNHqr8khNYwBJCbgxcIwnwMtnwGhVxgyYagoIhYIOgKCpm0C9vFUVWlODMooKkMNCgDwEVDZCDlHOKjAapUUFSHvkEUhjTOAISKjmgVl9dBXwiifc2AZqCj2RV4JP1hd09iAKMQ+kLRGEALQpzTGMDTT2QAaw2HVUyTCG4DxAYuP4UQF7G4w2ieAbQ5RJPIEEsJR2Pg8sXc5cvpy29oMu5WdyDaUmJt6uku+5BWMdmxCsrZ9GSA6mCLSZw9GdnR4vUPd6FHiUN0x+v5jwwWUF5wMGjKDXDS92dXv+RjMBanAuIHgG2pfkV8U1960/2gDEFPB2WPPYi2MkvKalLqv//EWKC/hgdPJXvjjlr6DGTfldFVce+AzNOvyMroFTInEtFtAzawOfrpI+iL5MJaEL5R2camHTSa2vSnNkDUNP9/6GJfYD6qeHK8ptUqZhAEr6lz4A1g3d8WVFer/IlWf7YgTFdV9FwDYDuz24poBlt5KyKbm0H7MAzrZlDue8mql/8EmB6ceDxmG2L6wXVVBs4PQNuCtmMzNKOVcLWGaDYthl9QC4pl1iql1nZqRx8DU1e6tVpLVr2PMFGkbYbOe2eMWpR3SinjnPfd0OvwW9Q6twizPASfoNuoOeJsh9FgJfyGHzXUtSagZWNEDl5Y4W6QlXgIKmynVt8A+NvDQ4S8QJ0YQrzfSlrRJqavBBBWdhBm/V7ZEO1BeaIvHUAbki1HuKYU3Pj+dAtBvke75g6Y8dzFAIk74BjO26UBszidG+8I3pxyUBfk+8KFu2tBNceHJNAeY+XuWXDjscsZoMNculu4I7ecLd4Dmw8MR9UYwLrjJs8CoY5p0T0idO444Ad8wwegSSk3Sy14bAdh+pymfnaAfPgLSE2HCQ4UZpcu6LOm/5IGLZ6CPTB37SOwDlGxnsZROUDo+y9wUG6B7O+P5ACtZziTodAApH56Cp3C91Cnx/8Voi9xAOeUbx8pKe2wes6LEPlfX4GsJxDo5Pd3tNQL+JvMwg7nZTQGJm8ANG0GWJKXDbD6MxAwGTeEkPEE6DBEzuO6igaA53zWEK3HCoX0yrrsQS4+InUA6shhL1KHAND6JNFIM1D8+Th0RFo6rmsJzyR9/aOtpop4kfRdyWrKuCUpO5tTjtFTSaiqoaQl4DBc/AjUuASSHuu3laXhJ8ZGG8DoMMQn4bya/DBom/gjIrv8/z/qIb4c0mNTIwlrYPXksA7iDVyIf6PQRA9jRsILAAAAAElFTkSuQmCC"/>
                                </div>

                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col  d-flex justify-content-center">
                                <span>UserName:</span>
                            </div>
                            <div className="col  d-flex justify-content-center"> 
                                <input className="form-control" value={localStorage.getItem("userName")} id="name"/>
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col  d-flex justify-content-center">
                                <span>Contact NO:</span>
                            </div>
                            <div className="col  d-flex justify-content-center"> 
                                <input className="form-control" value={localStorage.getItem("contactNumber")} id="contact"/>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col  d-flex justify-content-center">
                                <span>Email:</span>
                            </div>
                            <div className="col  d-flex justify-content-center">
                                <input className="form-control" value={localStorage.getItem("emailAddress")} id="email"/>
                            </div>

                        </div>
                        
                        <div className="row mt-3">
                            <div className="col  d-flex justify-content-center">
                                <span>City:</span>
                            </div>
                            <div className="col   d-flex justify-content-center">
                                <input className="form-control" value={localStorage.getItem("city")} id="city"/>
                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col  d-flex justify-content-center">
                                <Link className="btn btn-info" to={"/update"}>Update</Link>
                            </div>
                            <div className="col   d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={()=>{
                                    localStorage.clear()
                                    navigat("/")
                                }}>Logout</button>
                            </div>

                        </div>


                </div>
            </div>
        </div>
    </>)
}
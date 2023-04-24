import React, { useState } from "react";
import "../styles/form.css"

import { addbed } from "../services/api";
import { useNavigate } from "react-router-dom";

const initialvalue={
  room:'',
  bed_no: '',
  patient: '',
  // discharge: '',
  // active: ''
}


const AddBeds=()=>{

  const [user, setUser]= useState(initialvalue)
  const {room, bed_no, patient}= user;

  const navigate= useNavigate();

  const onValueChage=(e)=>{
    setUser({...user, [e.target.name]: e.target.value});
  }

  const addBedDetails=async()=>{
    console.log(user);
    await addbed(user);
    
    navigate('/add')
    
  }

    return(
        <>
  <div className="container">
    <div className="content">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Room Number</span>
            <input type="text" onChange={(e)=>{onValueChage(e)}} value={room} placeholder="Enter Room Number" name="room"/>
          </div>
          <div className="input-box">
            <span className="details">Bed Number</span>
            <input type="text" onChange={(e)=>{onValueChage(e)}} value={bed_no} placeholder="Enter Bed Number"  name="bed_no"/>
          </div>
          <div className="input-box">
            <span className="details">Patient</span>
            <input type="text" onChange={(e)=>{onValueChage(e)}} value={patient} placeholder="Enter Patients name" name="patient" />
          </div>
        <div class="button">
         <button className="button" onClick={()=>console.log('ppp')}>Add Bed</button>
        </div>
    </div>
  </div>
  </div>
        </>
    )
}
  
export default AddBeds;




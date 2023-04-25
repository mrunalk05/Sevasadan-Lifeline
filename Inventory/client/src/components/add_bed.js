import { useState } from "react"
import "../styles/form.css"
import { addbed } from "../services/api";

const initialValue = {
  room:'',
  bedno:'',
  patient: ''
}

const AddBeds=()=>{

  const [user, setUser]= useState(initialValue);
  const {room, bedno, patient}= setUser;
  

    const onValueChange=(e)=>{
      setUser({...user, [e.target.name]:e.target.value})
        console.log(e.target.value);
    }

    const addUserDetails=async()=>{
      console.log(user)
      await addbed(user);
    }

    return(
        <>
           
  <div className="container">
    <div className="content">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Room Number</span>
            <input type="text" onChange={(e)=>{onValueChange(e)}} value={room} placeholder="Enter Room Number" name="room"/>
          </div>
          <div className="input-box">
            <span className="details">Bed Number</span>
            <input type="text" onChange={(e)=>{onValueChange(e)}} value={bedno} placeholder="Enter Bed Number"  name="bed_no"/>
          </div>
          <div className="input-box">
            <span className="details">Patient</span>
            <input type="text" onChange={(e)=>{onValueChange(e)}} value={patient} placeholder="Enter Patients name" name="patient" />
          </div>
        <div class="button">
         <button className="button" onClick={()=>addUserDetails()}>Add Bed</button>
        </div>
    </div>
  </div>
  </div>
        </>
        
    )

}

export default AddBeds;
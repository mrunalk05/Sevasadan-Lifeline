import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Sidebar from "../../GlobalFiles/Sidebar";
// import { AddBed } from "../../../../../Redux/Datas/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
// const notify = (text) => toast(text);

const AddBeds = () => {
  return (
    <>
      <ToastContainer />
      <div className="container">
        {/* <Sidebar /> */}
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Beds</h1>

            <form >
              <div>
                <label>Bed Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="bed No"
                    name="bedNumber"
                    // value={BedData.bedNumber}
                    // onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Room Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="room no"
                    name="roomNumber"
                    // value={BedData.roomNumber}
                    // onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="formsubmitbutton">
                {/* {loading ? "Loading..." : "Submit"} */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBeds;

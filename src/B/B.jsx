"use client"
import React, { useState } from "react";
import "./B.css";
import { useDispatch } from "react-redux";

export const B = () => {

    const[loc,setLoc] = useState("");
    const dispatch=useDispatch();

   function handlesubmit (){
      dispatch({
        type:"LOC_UPDATE",
        loc:loc
      })
  }

  return (
    <div className="m-2 w-50">
      <h6>Component B</h6>
      <div>
        Loc: <input className="form-control w-25" type="text" name="loc" id="loc" onChange={(eve)=>{return setLoc(eve.target.value)}} />
      </div>
      <button className="btn btn-warning m-2" onClick={handlesubmit}>Submit</button>
    </div>
  );
};

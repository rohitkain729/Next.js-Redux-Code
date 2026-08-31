"use client"

import React, { useState } from 'react'
import './A.css';
import { useDispatch,ASASA } from 'react-redux';

export const A = () => {
  const[name ,setName] = useState("");
    const dispatch=useDispatch();

    const handleSubmit = ()=>{
        dispatch({type:"NAME_UPDATE",name});
     };

  return (
    <div className='w-50 m-2'>
      <div>A</div>
        <label htmlFor="">Component A</label>
        <div>
            <span>Name</span> <span><input className='form-control w-25' type="text" name="" id=""  onChange={(eve)=>{return setName(eve.target.value)}} /></span>
        </div>
        <button className='btn btn-danger mt-2' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

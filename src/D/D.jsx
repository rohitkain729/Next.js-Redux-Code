"use client"

import React from 'react'
import  './D.css';
import { useSelector } from 'react-redux';



export const D = () => {
    const loc=useSelector((state)=>{
      return   state.appReducer.loc;
  })
  return (
    <div className='m-2'>
        <h6 className='form-label'>D</h6>
        <div>Loc:{loc}</div>
    </div>
  )
}

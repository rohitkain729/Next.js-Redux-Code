"use client"

import React from 'react'
import './C.css';
import { useSelector } from 'react-redux';


export const C = () => {
   const name= useSelector((state)=>{
    return state.appReducer.name
 })
  return (
    <div className='m-2'>
        <h6 className='form-label'>Component C</h6>
        <div>Name: {name}</div>
    </div>
  )
}

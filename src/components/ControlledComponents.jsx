import React, { useState } from 'react'

function ControlledComponents() {

  const [val,setVal]=useState({name:"",email:""})
  const handleSubmit = event=>{
    event.preventDefault()
    console.log(val);
  }
  return (
    <div>
      <h1 className='text-[2rem] text-blue-400 font-bold'>2.
        controlled-components</h1>
        <p>state me val ko change karte hai (state update krvate hai)</p>
    <form action="" onSubmit={handleSubmit}>
      <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" name="" id=""  placeholder='enter your name' className='border-2 border-black ml-4 p-2'/>
      <input onChange={(event)=>setVal({...val,email:event.target.value})} type="text" name="" id=""  placeholder='enter your email' className='border-2 border-black ml-4 p-2'/>
      <input type="submit" name="" id="" className='border-2 border-black ml-4 p-2'/>
    </form>

  </div>
  )
}

export default ControlledComponents
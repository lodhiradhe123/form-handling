import React, { useRef } from 'react'

function UseRef() {
  const name=useRef(null)
  const email=useRef(null)
  const handleSubmi=(e)=>{
    e.preventDefault()
    console.log(name);//getting object of name having current and value inside it 👍
    console.log(name.current.value);
    console.log(email.current.value);
    
  }
    
  return (
    <div>
      <h1 className='text-[2rem] text-blue-400 font-bold'>1.
      useRef</h1>
      <form action="" onSubmit={handleSubmi}>
        <input ref={name} type="text" name="" id=""  placeholder='enter your name' className='border-2 border-black ml-4 p-2'/>
        <input ref={email} type="text" name="" id=""  placeholder='enter your email' className='border-2 border-black ml-4 p-2'/>
        <input type="submit" name="" id="" className='border-2 border-black ml-4 p-2'/>
      </form>

    </div>
  )
}

export default UseRef
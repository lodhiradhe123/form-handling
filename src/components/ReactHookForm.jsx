import React from 'react'
import {useForm} from 'react-hook-form';

function ReactHookForm() {
    const {register,handleSubmit} = useForm();
    // console.log(register());
  
    
  return (
    <div>
    <h1 className='text-[2rem] text-blue-400 font-bold'>2.
      React-Hook-Form</h1>
      <p>1.we need to install first (npm i react-hook-form) <br />
      2.input ki name filed dena pdega tab jake data ayega otherwise you have to remove the name field. 
</p>
  <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
    <input {...register('name')} type="text"  id=""  placeholder='enter your name' className='border-2 border-black ml-4 p-2'/>
    <input {...register('email')}  type="email"  id="email"  placeholder='enter your email' className='border-2 border-black ml-4 p-2'/>
    <input type="submit" name="" id="" className='border-2 border-black ml-4 p-2'/>
  </form>

</div>
  )
}

export default ReactHookForm
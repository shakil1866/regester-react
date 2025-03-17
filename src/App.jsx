import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:""
  });

   const handInput = (event) =>{
 const name = event.target.name;

 const value = event.target.value;
   
 setData((prev)=> {
  return {...prev, [name] : value}

  });
 };

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-blue-400'>
    <div className='flex flex-col gap-2 justify-between border p-[3%]  bg-gray-200  w-[100%] sm:w-[70%] md:w-[50%] lg:w-[45%] '>
      <div className='text-center text-xl py-3 font-bold sm:text-2xl lg:text-4xl lg:pb-3'>Register From</div>

      <div className='flex text-sm  lg:text-lg justify-between items-center '>  <label className=''>Name: </label>
      <input type='text' name='username' value={data.username} onChange={handInput} className='border rounded-sm p-1 focus:outline-none focus:bg-gray-300 w-[70%] '></input>
      </div>

      <div className='flex text-sm  lg:text-lg  justify-between items-center'><label className=''>Email: </label>
      <input type="email" name='email' value={data.email} onChange={handInput} className='border rounded-sm p-1 focus:outline-none  focus:bg-gray-300 w-[70%]'></input></div>

      <div className='flex text-sm  lg:text-lg  justify-between items-center'><label className=''>Password: </label>
      <input type='password' name='password' value={data.password} onChange={handInput} className='border  rounded-sm p-1 focus:outline-none focus:bg-gray-300 w-[70%]'></input></div>

      <div className='flex  text-sm  lg:text-lg  justify-between items-center'><label>Password:</label>
    <input type='password' name='confirm_password' value={data.confirm_password} onChange={handInput} className='border rounded-sm focus:outline-none p-1 focus:bg-gray-300 w-[70%]'></input></div>
   
   <div className='py-3'><button className=' border px-5 py-1 bg-blue-500 text-white font-medium hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out transform active:scale-95' >Submit</button></div> 

    <div className=' sm:text-lg lg:text-2xl '><p className='text-center text-md font-bold text-blue-500'>{`My name is ${data.username} and my email is ${data.email}`}</p></div>
    </div>
    </div>
    </>
  )
}

export default App

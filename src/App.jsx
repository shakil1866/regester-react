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
    <div className='flex flex-col gap-2 justify-between border p-[3%] bg-gray-200  w-[30%]'>
      <div className='text-center text-2xl py-3 font-bold'>Register From</div>

      <div className='flex justify-between'>  <label className=''>Name: </label>
      <input type='text' name='username' value={data.username} onChange={handInput} className='border rounded-sm p-1 focus:outline-none focus:bg-gray-300'></input>
      </div>

      <div className='flex justify-between'><label className=''>Email: </label>
      <input type="email" name='email' value={data.email} onChange={handInput} className='border rounded-sm p-1 focus:outline-none  focus:bg-gray-300'></input></div>

      <div className='flex justify-between'><label className=''>Password: </label>
      <input type='password' name='password' value={data.password} onChange={handInput} className='border  rounded-sm p-1 focus:outline-none focus:bg-gray-300'></input></div>

      <div className='flex justify-between'><label>Confirm Password:</label>
    <input type='password' name='confirm_password' value={data.confirm_password} onChange={handInput} className='border rounded-sm focus:outline-none p-1 focus:bg-gray-300'></input></div>
   
   <div className='py-3'><button className=' border px-5 py-1 bg-blue-500 text-white font-medium hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out transform active:scale-95' >Submit</button></div> 

    <div className=''><p className='text-center font-extrabold text-blue-500'>{`My name is ${data.username} and my email is ${data.email}`}</p></div>
    </div>
    </div>
    </>
  )
}

export default App

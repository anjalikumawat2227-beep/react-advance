import React, { useState } from 'react'
import Navbar from './componants/navbar'
import Card from './componants/Card'
import Login from './componants/Login'
import LogFrom from './componants/LogFrom'
import RHF from "./componants/RHF"

function App() {
  const [toggle, setToggle] = useState(true)
  const [allUser, setAllusers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  })
  const [updateUser ,setUpdateUser] = useState(null)

  const deleteUser =(id)=>{
    const filterUser = allUser.filter((elem)=> elem.id !== id)
    setAllusers(filterUser)
    localStorage.setItem("users",JSON.stringify(filterUser))
  }

  return (
    <div className='h-screen  bg-gray-800 text-white p-4 flex flex-col '>
      <Navbar setToggle={setToggle} />
      {/* {
        toggle ?
          <Card allUser={allUser}/> : <LogFrom setAllusers={setAllusers} />
      } */}
      {
        toggle ? (<div className='flex gap-4'>
          { 
            allUser.map((elem,index) => {
              return <Card key={index} elem={elem} setToggle={setToggle} setUpdateUser={setUpdateUser} deleteUser={deleteUser} />
            })
          }
        </div>) : <RHF allUser={allUser} setAllusers={setAllusers} setToggle={setToggle} setUpdateUser={setUpdateUser} updateUser={updateUser} />
      }
    </div>
  )
}

export default App

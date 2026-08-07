import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

function Navbar() {
    const {setToggle} = useContext(MyStore)
  return (
    <div className='bg-black py-2 px-4 h-10 flex justify-between '>
        <div>
            <h1>logo</h1>
        </div>
        <div className='flex gap-5 pointer-curser'>
            <p onClick={()=>setToggle(true)}>products</p>
            <p onClick={()=>setToggle(false)} >cart</p>
        </div>
        <div>
           login
        </div>
    </div>
  )
}

export default Navbar
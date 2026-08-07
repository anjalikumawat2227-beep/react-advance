import React from 'react'

function Navbar({setToggle}) {
  return (
    <div className='bg-black py-2 px-4 h-10 flex justify-between '>
        <div>
            <h1>logo</h1>
        </div>
        <div className='flex gap-5 pointer-curser'>
            <p>Home</p>
            <p onClick={()=>setToggle(true)} >cart</p>
        </div>
        <div onClick={()=>setToggle(false)}>
            createUser
        </div>
    </div>
  )
}

export default Navbar
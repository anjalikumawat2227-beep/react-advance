import React from 'react'

function Card({elem,setToggle,setUpdateUser,deleteUser}) {
    const updateUserData =()=>{
        setToggle(false),
        setUpdateUser(elem)
    }
    return (
        <div className=' w-50 bg-gray-700 flex flex-col p-4 mt-4x gap-2 rounded border-2 border-gray-500'>
            <div >
                <img className='object-cover h-full rounded-md' src={elem.image} alt="image" />
            </div>
            <div>
                <h1 className='text-bold'>Name:{elem.username}</h1>
                <p className='text-sm'>email:{elem.email}</p>
                <p className='text-sm'>contact:{elem.email}</p>
            </div>
            <div className='flex justify-between'>
                <button onClick={updateUserData} className='border-1 px-4 bg-yellow-700 rounded'>Edit</button>
                <button onClick={()=>deleteUser(elem.id)} className=' border-1 px-4 bg-red-700 rounded'>Delete</button>
            </div>
        </div>
    )
}

export default Card
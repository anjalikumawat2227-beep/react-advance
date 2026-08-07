import React, { useRef } from 'react'

function LogFrom({ setAllusers }) {
    const inpRef = useRef({})

    const setRef = (field) => (el) => {
        inpRef.current[field] = el
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        let obj = {
            username: form.username.value,
            mobile: form.mobile.value,
            email: form.email.value,
            password: form.password.value,
        }

        setAllusers((prev) => [...prev, obj])
    }

    return (
        <div className='flex flex-col items-center mt-4'  >
            <h1>LOGIN</h1>
            <div>
                <form className='w-100 h-75 flex flex-col items-center justify-center bg-gray-400 text-black px-4 py-2 g-4 mt-4 border-2 border-gray-600 rounded-md' onSubmit={handleSubmit} >
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mb-4'
                        type="text"
                        placeholder='Enter your name'
                        name='username'
                        //    ref={(e)=> inpRef.current.username = e}/>
                        ref={setRef("username")} />
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mb-4'
                        type="tell"
                        name='mobile'
                        placeholder='Enter your Mobile-Number'
                        // ref={(e)=>  inpRef.current.mobile = e}  />
                        ref={setRef("mobile")} />
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mb-4'
                        type="email" placeholder='Enter your email'
                        name="email"
                        //  ref={(e)=> inpRef.current.email = e}/>
                        ref={setRef("email")} />
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mb-4'
                        type="password" placeholder='Enter your password'
                        name='password'
                        //  ref={(e)=>inpRef.current.password = e}/>
                        ref={setRef("password")} />
                    <button className='border-1 w-full bg-blue-800 text-white p-2 rounded' type='submit'>register</button>
                </form>
            </div>
        </div>
    )
}

export default LogFrom
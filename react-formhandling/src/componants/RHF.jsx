import React from 'react'
import { useForm } from "react-hook-form"

function RHF({ setAllusers, setToggle, allUser, updateUser,setUpdateUser}) {

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: updateUser
    })

    const formData = (data) => {
        if (updateUser) {
            setAllusers((prev) => {
                const updateUsers = prev.map((elem) => {
                    return elem.id === updateUser.id ? { ...data } : elem
                })
                localStorage.setItem("users",JSON.stringify(updateUsers))
                return updateUsers
            })
           setUpdateUser(null)
        } else {
            let arr = [...allUser, { ...data, id: Date.now() }]
            setAllusers(arr)
            localStorage.setItem("users", JSON.stringify(arr))
        }
        reset()
        setToggle(true)
    }

    return (
        <div className='flex flex-col items-center mt-4'  >
            <h1>React Hook Form</h1>
            <div>
                <form onSubmit={handleSubmit(formData)} className='w-100 flex flex-col justify-center bg-gray-400 text-black px-4 py-2 g-4 mt-4 border-2 border-gray-600 rounded-md' >
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mt-3'
                        type="text"
                        placeholder='Enter your name'
                        {...register("username", {
                            required: "name is required"
                        })}
                    />
                    {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mt-3 '
                        type="tell"
                        placeholder='Enter your Mobile-Number'
                        {...register("mobile", {
                            required: "mobile is required",
                            minLength: {
                                value: 10,
                                message: "minimun 10-degits required"
                            },
                            maxLength: {
                                value: 10,
                                message: "maximum 10-degits required"
                            }
                        })}
                    />
                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mt-3'
                        type="url"
                        placeholder='Enter your image'
                        {...register("image", { required: "image is require" })}
                    />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    <input className='border-1 rounded px-4 py-2 bg-gray-800 text-white w-full mt-3'
                        type="email" placeholder='Enter your email'
                        {...register("email", {
                            required: "email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "please enter vaild email"
                            }
                        })}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    <button className='border-1 w-full bg-blue-800 text-white p-2 rounded mt-5' type='submit'>register</button>
                </form>
            </div>
        </div>
    )

}

export default RHF
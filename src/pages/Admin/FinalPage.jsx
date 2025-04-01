import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/auth/final.png'
const FinalPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col">

            <div className="text-right w-full p-8">
                <span className="text-sm text-gray-600 mr-2">Remember Password?</span>
                <Link to={"/admin/register"} className="bg-[#049F30] text-white py-2 px-4 rounded">Sign In</Link>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-white">

                <img src={Img} alt="" />
                <h1 className='mt-1 font-semibold'>Congratulation!</h1>
                <p className='mt-3 text-center text-[#667676]'>Your password have been reset successfully</p>

                <Link to={"/admin/login"}>
                    <button className="bg-[#049F30] text-white  py-2 px-4 rounded w-[20rem] mt-3">Back to Login</button>
                </Link>

            </div>

        </div>
    )
}

export default FinalPage
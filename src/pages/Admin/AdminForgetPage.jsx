import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminForgetPage = () => {

    return (
        <div className="w-screen h-screen flex flex-col">

            <div className="text-right w-full p-8">
                <span className="text-sm text-gray-600 mr-2">Remember Password?</span>
                <Link to={"/admin/register"} className="bg-[#049F30] text-white py-2 px-4 rounded">Sign In</Link>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-white">


                <div className="w-full max-w-md p-8">
                    <h2 className="text-2xl font-semibold text-[#049F30] mb-2">Forget Password</h2>
                    <p className="text-sm text-gray-600 mb-6">Enter your email address to recover 😢</p>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <Link to={"/admin/final"}>
                        <button className="bg-[#049F30] text-white font-semibold py-2 px-4 rounded w-full">Reset Password</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default AdminForgetPage;
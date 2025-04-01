import React, { useState } from 'react';
import AuthImage from '../../assets/auth/auth.png';
import Logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import toast from 'react-hot-toast';
import axios from 'axios';

const RegisterPage = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({ firstName: '', middleName: '', lastName: '', email: '', phone: '', dob: '', address: '', otherAddressInfo: '', country: '', zipCode: '', state: '', city: '', password: '', refferalCode: '', });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    let loader = toast.loading("Processing")
    try {
      const response = await axios.post(`${config.baseUrl}/account/register`,formData);
      if(response?.data){
        toast.dismiss(loader)
        localStorage.setItem("uId",response?.data?.data?._id)
        localStorage.setItem("uEmail",response?.data?.data?.email)
        toast.success('Registration successful!');
        setTimeout(() => { nav("/verify") }, 2000);
      }
    } 
    catch (error) {
      toast.dismiss(loader)
      if (error.response) {
        toast.error(error?.response?.data?.msg || 'Registration failed. Please try again.');
      } 
      else if (error.request) {
        toast.error('No response received from the server. Please try again.');
      } 
      else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen overflow-y-auto'>

      <div className='flex-1 hidden md:flex flex-col h-[100%] bg-[#F3FDFF]'>
        <div className="flex-shrink-0 flex items-center gap-x-2 p-5">
          <img src={Logo} alt="" className='h-10' />
          <span className="text-xl">NGOC ANH</span>
        </div>
        <div className='flex-1 h-[90%]'>
          <img src={AuthImage} alt="" className='h-[100%]' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center flex-col h-[100%] overflow-y-auto pt-[25rem] md:pt-0'>
        <div className='w-full max-w-xl p-6'>
          <h2 className="text-2xl mb-4">Create an account</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required={true} type="text" name="firstName" placeholder="First Name" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="middleName" placeholder="Middle Name" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="lastName" placeholder="Last Name" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="email" name="email" placeholder="Email Address" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="password" name="password" placeholder="Password" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="password" name="confirmPassword" placeholder="Confirm Password" className="border p-2 rounded" />
            <input required={true} type="tel" name="phone" placeholder="Phone Number" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="date" name="dob" placeholder="Date Of Birth" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="address" placeholder="Street Address" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="otherAddressInfo" placeholder="Apt. #, Suite, Floor (Opt)" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="country" placeholder="Country" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="state" placeholder="State" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="zipCode" placeholder="Zip Code" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="city" placeholder="City" className="border p-2 rounded" onChange={handleChange} />
            <input required={true} type="text" name="refferalCode" placeholder="Referral Code (Optional)" className="border p-2 rounded" onChange={handleChange} />
          </form>
          <button className="w-full bg-[#9FE7F5] p-2 rounded mt-4" onClick={handleRegistration}>Sign Up</button>
          <p className="text-center mt-2 text-[#3D8977]">Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
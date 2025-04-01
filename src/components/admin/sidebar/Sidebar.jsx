import React, { useRef, useState } from 'react';
import Logo from '../../../assets/dashboard/admin/logo.png';
import { adminNav } from '../../../constants/sidebarData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { useSidebar } from '../../../context/SidebarContext';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = () => {

  const location = useLocation().pathname.split("/")[3];
  const [showLogout, setshowLogout] = useState(false)
  const { isNavOpen, toggleNav } = useSidebar();
  const sidebarRef = useRef(null);
  const nav = useNavigate();




  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`lg:block hidden w-[15rem] h-[100vh] bg-[#ffff] relative border-r border-r-[#D8D8D880]`}>

        <div className='flex items-center gap-x-2 m-5'>
          <h1 className='text-xl font-semibold'>NGOC</h1>
        </div>


        <div className='mt-8'>
          {adminNav?.map((i) => (
            <Link to={`/admin/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#E6F5EA]"} px-5 p-2  items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-[#049F30]" : "text-[#8F8F8F]"}`}>
              <div>{i.icon}</div>
              <p className='text-sm'>{i.name}</p>
            </Link>
          ))}
        </div>

        <div onClick={() => nav("/admin/login")} className='absolute bottom-5 w-[80%] flex items-center gap-x-3 cursor-pointer mx-5 '>
          <IoLogOut className='text-[#FF3B30] cursor-pointer text-xl' />
          <p className='text-[#C9C9C9]'>Log out</p>
        </div>

      </div>

      {/* Mobile Sidebar */}
      {
        isNavOpen && (
          <div className={`lg:hidden block w-[14rem] z-50 h-[100vh] bg-[#0F0F0F] fixed top-0 left-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`} ref={sidebarRef}>

            <div className='flex items-center gap-x-2 m-5'>
              <h1 className='text-xl font-semibold text-white'>NGOC</h1>
            </div>


            <div className='mt-8'>
              {adminNav?.map((i) => (
                <Link to={`/admin/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#E6F5EA]"} px-5 p-2  items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-[#049F30]" : "text-[#8F8F8F]"}`}>
                  <div>{i.icon}</div>
                  <p className='text-sm'>{i.name}</p>
                </Link>
              ))}
            </div>

            <div onClick={() => nav("/admin/login")} className='absolute bottom-5 w-[80%] flex items-center gap-x-3 cursor-pointer mx-5 '>
              <IoLogOut className='text-[#FF3B30] cursor-pointer text-xl' />
              <p className='text-[#C9C9C9]'>Log out</p>
            </div>

          </div>
        )}
    </>
  );
};

export default Sidebar;

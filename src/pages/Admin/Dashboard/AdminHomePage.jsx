import { useState } from 'react';
import { FaUsers, FaUserCheck, FaUserTimes, FaBan, FaFileCode, FaFileAlt } from 'react-icons/fa';
import { BsCalendarDay } from 'react-icons/bs';

const AdminHomePage = () => {
    const [stats] = useState([
        { title: 'Total Users', value: 45, icon: <FaUsers /> },
        { title: 'Active Users', value: 35, icon: <FaUserCheck /> },
        { title: 'Inactive Users', value: 2, icon: <FaUserTimes /> },
        { title: 'Suspended Users', value: 8, icon: <FaBan /> },
        { title: 'Number of Thinkscripts', value: 30, icon: <FaFileCode /> },
        { title: 'Active Thinkscripts', value: 27, icon: <FaFileAlt /> },
        { title: 'Suspended Thinkscripts', value: 3, icon: <FaBan /> },
    ]);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <div className="flex items-center">
                    <button className="border  py-2 px-4 rounded flex items-center mr-2">
                        <BsCalendarDay className="mr-2" /> Today
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">

                        <div className='flex items-center gap-x-6'>
                            <div className="w-[2.2rem] h-[2.2rem] bg-[#D9D9D933] flex justify-center items-center text-[#049F30] rounded-full">{stat.icon}</div>
                            <h3 className="text-lg">{stat.title}</h3>
                        </div>
                        <p className="text-4xl font-bold text-[#049F30] text-center mt-4">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHomePage;
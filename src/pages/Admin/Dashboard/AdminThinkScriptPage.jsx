import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { BsGraphUp, BsExclamationTriangleFill, BsCheckCircleFill } from 'react-icons/bs';

const scans = [
    {
        name: 'Momentum Scanner',
        type: 'Scanner',
        lastModified: '5 mins ago',
        status: 'Active',
    },
    {
        name: 'MACD Custom Indicator',
        type: 'Indicator',
        lastModified: '10 mins ago',
        status: 'Active',
    },
    {
        name: 'Breakout Strategy',
        type: 'Strategy',
        lastModified: '15 mins ago',
        status: 'Needs Fix',
    },
    {
        name: 'RSI Oversold Alert',
        type: 'Alert',
        lastModified: '30 mins ago',
        status: 'Active',
    },
    {
        name: 'Momentum Scanner',
        type: 'Scanner',
        lastModified: '5 mins ago',
        status: 'Active',
    },
    {
        name: 'MACD Custom Indicator',
        type: 'Indicator',
        lastModified: '10 mins ago',
        status: 'Active',
    },
    {
        name: 'Breakout Strategy',
        type: 'Strategy',
        lastModified: '15 mins ago',
        status: 'Needs Fix',
    },
    {
        name: 'RSI Oversold Alert',
        type: 'Alert',
        lastModified: '30 mins ago',
        status: 'Active',
    },
    {
        name: 'RSI Oversold Alert',
        type: 'Alert',
        lastModified: '30 mins ago',
        status: 'Active',
    },
]

const AdminThinkScriptPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 22;
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active':
                return <BsCheckCircleFill className="text-green-500" />;
            case 'Needs Fix':
                return <BsExclamationTriangleFill className="text-yellow-500" />;
            default:
                return null;
        }
    };

    const getTypeIcon = (type) => {
        if (type === 'Scanner') {
            return <BsGraphUp />;
        }
        return null;
    };

    return (
        <div className='flex-1 overflow-x-auto'>
            <div className='flex justify-between items-center mb-6 flex-wrap'>
                <div className='flex items-center mt-2'>
                    <h2 className='text-xl text-[#049F30] mr-2'>ThinkScripts</h2>
                    <span className='text-sm text-[#049F30]'>300 Found</span>
                </div>
                <button className='border border-[#049F30] text-[#049F30] py-2 px-4 rounded mt-2'>Create New ThinkScript</button>
            </div>

            <div className='flex justify-between items-center mb-6 bg-white p-3 rounded-md'>
                <input type='text' placeholder='Search for scan name, criteria, etc...' className='border border-[#049F30] rounded-md p-2 w-1/2 mr-2' />
                <button className='bg-white text-[#049F30]  py-2 px-4 rounded border'>Filters</button>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead className='bg-[#EBF2ED]'>
                        <tr>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Script Name</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Type</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Last Modified</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Status</th>
                            <th className='py-2 px-4'></th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {scans.map((scan, index) => (
                            <tr key={index} className='border-b'>
                                <td className='py-2 px-4 text-nowrap'>{scan.name}</td>
                                <td className='py-2 px-4 text-nowrap flex items-center gap-1'>{getTypeIcon(scan.type)} {scan.type}</td>
                                <td className='py-2 px-4 text-nowrap'>{scan.lastModified}</td>
                                <td className='py-2 px-4 text-nowrap flex items-center gap-1'>
                                    {getStatusIcon(scan.status)} {scan.status}
                                </td>
                                <td><HiDotsVertical /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className='flex justify-between items-center px-3 py-5 bg-white flex-wrap'>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className='text-gray-500 border border-[#049F304D] px-3 py-2 rounded-lg'>&lt; Previous</button>

                <div className='flex items-center'>
                    {[...Array(5)].map((_, index) => {
                        const page = currentPage - 2 + index;
                        if (page > 0 && page <= totalPages) {
                            return (
                                <button key={index} onClick={() => setCurrentPage(page)} className={`mx-1 px-3 py-1 rounded-md ${page === currentPage ? 'bg-green-500 text-white' : 'border'}`}>{page}</button>
                            );
                        }
                        return null;
                    })}
                    {currentPage + 2 < totalPages && <span className='mx-1'>...</span>}
                    {currentPage + 2 < totalPages && (<button onClick={() => setCurrentPage(totalPages)} className='mx-1 px-3 py-1 border rounded-md'>{totalPages}</button>)}
                </div>

                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className='ext-gray-500 border border-[#049F304D] px-3 py-2 rounded-lg'>Next &gt;</button>
            </div>
        </div>
    );
};

export default AdminThinkScriptPage;
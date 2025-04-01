import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";

const user = [
    {
        name: 'Mercy Olive',
        phoneNumber: '+2349123657865',
        emailAddress: 'mercyolive@gmail.com',
        subscriptionTiers: 'Basic',
        thinkscripts: 10,
    },
    {
        name: 'Steven Obi',
        phoneNumber: '+2348123764587',
        emailAddress: 'stevenobi@gmail.com',
        subscriptionTiers: 'Pro',
        thinkscripts: 20,
    },
    {
        name: 'Gabriel Momoh',
        phoneNumber: '+23480764453627',
        emailAddress: 'gabrielmomoh@gmail.com',
        subscriptionTiers: 'Enterprise',
        thinkscripts: 35,
    },
    {
        name: 'Lana Steiner',
        phoneNumber: '+2349145678634',
        emailAddress: 'lanasteiner@gmail.com',
        subscriptionTiers: 'Enterprise',
        thinkscripts: 45,
    },
    {
        name: 'Drew Cano',
        phoneNumber: '+2349023679876',
        emailAddress: 'drewcano@gmail.com',
        subscriptionTiers: 'Basic',
        thinkscripts: '05',
    },
    {
        name: 'Mark Jones',
        phoneNumber: '+2348076894536',
        emailAddress: 'markjones@gmail.com',
        subscriptionTiers: 'Pro',
        thinkscripts: 19,
    },
    {
        name: 'Tunde Bakare',
        phoneNumber: '+2348067542356',
        emailAddress: 'tundebakare@gmail.com',
        subscriptionTiers: 'Pro',
        thinkscripts: 23,
    },
    {
        name: 'Kate Morrison',
        phoneNumber: '+2348067542356',
        emailAddress: 'katemorrison@gmail.com',
        subscriptionTiers: 'Enterprise',
        thinkscripts: 65,
    },
    {
        name: 'Orlando Grigs',
        phoneNumber: '+2348067542356',
        emailAddress: 'orlandogrigs@gmail.com',
        subscriptionTiers: 'Pro',
        thinkscripts: 26,
    },
    {
        name: 'Omotola Ajayi',
        phoneNumber: '+2348067542356',
        emailAddress: 'omotolaajayi@gmail.com',
        subscriptionTiers: 'Enterprise',
        thinkscripts: 32,
    },
    {
        name: 'Dave Stones',
        phoneNumber: '+2348067542356',
        emailAddress: 'davestones@gmail.com',
        subscriptionTiers: 'Basic',
        thinkscripts: 10,
    },
]
const AdminUserPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 22;

    return (
        <div className='flex-1 overflow-x-auto'>
            <div className='flex justify-between items-center mb-6 flex-wrap'>
                <div className='flex items-center mt-2'>
                    <h2 className='text-xl text-[#049F30] mr-2'>Users</h2>
                    <span className='text-sm text-[#049F30]'>300 Users</span>
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
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Name</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Phone Number</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Email Address</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Subscription tiers</th>
                            <th className='py-2 px-4 text-[#049F30] text-nowrap font-medium'>Thinkscripts</th>
                            <th className='py-2 px-4'></th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {user.map((user, index) => (
                            <tr key={index} className='border-b'>
                                <td className='py-2 px-4 text-nowrap'>{user.name}</td>
                                <td className='py-2 px-4 text-nowrap'>{user.phoneNumber}</td>
                                <td className='py-2 px-4 text-nowrap'>{user.emailAddress}</td>
                                <td className='py-2 px-4 text-nowrap'>{user.subscriptionTiers}</td>
                                <td className='py-2 px-4 text-nowrap'>{user.thinkscripts}</td>
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
    )
}

export default AdminUserPage
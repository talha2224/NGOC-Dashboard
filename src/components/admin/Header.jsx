import AvatarIcon from '../../assets/dashboard/avatar.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../context/SidebarContext';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = ({ location }) => {
    const { isNavOpen, toggleNav } = useSidebar();


    return (

        <div className='w-[100%] flex justify-between items-center p-5 px-3  bg-white'>

            <div className='flex items-center gap-x-4'>
                <GiHamburgerMenu className='lg:hidden block cursor-pointer' onClick={() => toggleNav(!isNavOpen)} />
                <div className='text-[#049F30] md:block hidden'>
                    <h1>👋 Hi Bidemi,</h1>
                    <h1 className='text-sm'>Let’s get productive today!</h1>
                </div>
            </div>


            <div className='flex items-center gap-x-3 sm:gap-x-4'>

                <IoMdNotificationsOutline size={20} />

                <img src={AvatarIcon} alt="HopOn Dashboard- Avatar" className='max-w-8 min-w-8 cursor-pointer' />
                <div className='text-[#049F30]'>
                    <h1 className='text-sm'>Bidemi</h1>
                    <h1 className='text-sm text-[#00000080]'>Admin</h1>
                </div>
            </div>

        </div>

    )
}

export default Header
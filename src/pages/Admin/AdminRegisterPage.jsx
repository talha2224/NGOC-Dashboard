import { Link } from "react-router-dom";

const AdminRegisterPage = () => {
    return (


        <div className="w-screen h-screen flex flex-col">

            <div className="text-right w-full p-8">
                <span className="text-sm text-gray-600 mr-2">Have an account?</span>
                <Link to={"/admin/login"} className="bg-[#049F30] text-white py-2 px-4 rounded">Sign In</Link>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-white">


                <div className="w-full max-w-2xl p-8">
                    <h2 className="text-2xl font-semibold text-[#049F30] mb-2">Create an account with MyOptionsAlerts</h2>
                    <p className="text-sm text-gray-600 mb-6 text-center">Hey! Set up your account to embark on this journey</p>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" placeholder="First Name" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" placeholder="Last Name" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" placeholder="Email address" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Password" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="p-3 mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                    </div>

                    <Link to={"/admin/dashboard/home"}>
                        <button className="bg-[#049F30] text-white font-semibold py-2 px-4 rounded w-full">Create an Account</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default AdminRegisterPage;
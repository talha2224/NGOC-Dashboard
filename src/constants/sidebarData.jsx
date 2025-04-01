import { FaRegUser } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import {IoMdDocument } from "react-icons/io";
import { MdDashboard, MdOutlineKey } from 'react-icons/md';
import { RiHome5Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { RiFilePaperLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <MdDashboard />
    },
    {
        id: 7,
        link: "hotline",
        name: "HotLine",
        icon: <IoCall   />
    }
];

export const adminNav = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <MdDashboard />
    },
    {
        id: 7,
        link: "user",
        name: "User Managements",
        icon: <LuUser />
    },
    {
        id: 4,
        link: "thinkScript",
        name: "ThinkScript Manager",
        icon: <RiFilePaperLine />
    },
    {
        id: 3,
        link: "subscription",
        name: "Subscription & Billing",
        icon: <HiOutlineNewspaper  />
    },
]

export const companyNavData = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <RiHome5Fill/>
    },
    {
        id: 7,
        link: "api",
        name: "Api",
        icon: <MdOutlineKey/>
    },
    {
        id: 4,
        link: "transaction",
        name: "Transaction",
        icon: <GrTransaction/>
    },
    {
        id: 3,
        link: "documentation",
        name: "Documentation",
        icon: <IoMdDocument/>
    },
    {
        id: 35,
        link: "profile",
        name: "Profile",
        icon: <FaRegUser/>
    }
];
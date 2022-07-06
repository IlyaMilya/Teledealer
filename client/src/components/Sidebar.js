import react from 'react';
import "../App.css";
import {TbReportMoney} from  'react-icons/tb';
import {FcMoneyTransfer} from 'react-icons/fc';
import {GiPapers, GiReceiveMoney} from 'react-icons/gi';
import {FaUserAlt, FaBars, FaBook, FaFileContract} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



function Sidebar({children}) {

    const menuItem = [

    {
        path: "/",
        name: "Deals",
        icon: <GiReceiveMoney/>
    },
    {
        path: "/",
        name: "Leads",
        icon: <FaBook/>
    },
    {
        path: "/",
        name: "Guidelines",
        icon: <GiPapers/>
    },
    {
        path: "/",
        name: "User",
        icon: <FaUserAlt/>
    },
    ]

    return (
        <div className="container">
            <div className="sidebar">
                <div className="top-section">
                    <h1 className="logo"> TeleDealer </h1>
                        <div className='bars'>
                            <FaBars/>  
                        </div>
                    </div>
                {
                menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>


                </NavLink>
                ))
                }
            </div>
            <main>{children}</main>
        </div>
    )

}

export default Sidebar;
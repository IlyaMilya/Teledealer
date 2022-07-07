import react, {useState} from 'react';
import "../App.css";
import {TbReportMoney} from  'react-icons/tb';
import {FcMoneyTransfer} from 'react-icons/fc';
import {GiPapers, GiReceiveMoney, GiRotaryPhone} from 'react-icons/gi';
import {FaUserAlt, FaBars, FaBook, FaFileContract} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



function Sidebar({children}) {
const [isOpen, setIsOpen]= useState(false);
const toggle = () => setIsOpen(!isOpen);

    const menuItem = [

    {
        path: "/deals",
        name: "Deals",
        icon: <GiReceiveMoney/>
    },
    {
        path: "/leads",
        name: "Leads",
        icon: <FaBook/>
    },
    {
        path: "/guidelines",
        name: "Guidelines",
        icon: <GiPapers/>
    },
    {
        path: "/user",
        name: "User",
        icon: <FaUserAlt/>
    },
    ]

    return (
        <div className="container">
            <div style = {{width: isOpen ? "500px" : "160px" }} className="sidebar">
                <div className="top-section">
                    <h1 style = {{display: isOpen ? "block" : "none" }}className="logo"> 
                    <GiRotaryPhone/>TeleDealer </h1>
                        <div style = {{margin_left: isOpen ? "500px" : "500px"}} className='bars'>
                            <FaBars onClick={toggle}/>  
                        </div>
                    </div>
                {
                menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div style = {{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>


                </NavLink>
                ))
                }
            </div>
            <main>{children}</main>
        </div>
    )

}

export default Sidebar;
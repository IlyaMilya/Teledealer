import react, {useState} from 'react';
import "../App.css";
import {TbReportMoney} from  'react-icons/tb';
import {FcMoneyTransfer} from 'react-icons/fc';
import {GiPapers, GiReceiveMoney, GiRotaryPhone} from 'react-icons/gi';
import {FaUserAlt, FaBars, FaBook, FaFileContract} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {ImExit} from 'react-icons/im'


function Sidebar({handleLogout}) {
// const [isOpen, setIsOpen]= useState(false);
// const toggle = () => setIsOpen(!isOpen);

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
        // <div className="container">
            <div style = {{width: "398px"  }} className="sidebar">
                <div className="top-section">
                    <h1 style = {{display: "block"  }}className="logo"> 
                    <GiRotaryPhone/>TeleDealer </h1>
                        <div style={{marginLeft:  "50px"}} className='bars'>
                            {/* <FaBars onClick={toggle}/>   */}
                        </div>
                    </div>
                {
                menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div style = {{display: "block" }}className="link_text">{item.name}</div>
                </NavLink>
                ))
                }
                <button className= "logout-bttn" onClick={handleLogout}> 
                <ImExit/>
                
            </button>
            
         </div>
    )

}

export default Sidebar;
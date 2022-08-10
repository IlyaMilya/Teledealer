import react from "react"
import Sidebar from "./Sidebar";
import '../user.css';

function User({employee}) {

    let commission = 0.05

    return (
        <div className="user">
        <div className="user-container">
            {console.log(employee.full_name)}
        <h1 className="userheader"> User Profile </h1>
        <div className="user-info">
        <p className= "employee-name"> YOUR NAME: {employee.full_name}</p>
        <p className="employee-deals-amount"> {console.log(employee.deals.length)} TOTAL DEALS: {employee.deals.length} </p>
        <p> COMMISSION: {commission * 100}% </p>
        <p > TOTAL EARNINGS: {}</p>
        </div>
        </div>
        </div>
    )
}

export default User;
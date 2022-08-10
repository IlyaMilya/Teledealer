

import react from 'react'
import "../leads.css" 
import {FaEdit} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'
function Leads({leads}) {


    return(
        <div className="all-leads">
            <div className= "leads-container">
        <h1 className="client-name">{leads.full_name}</h1>
        <h2 className="client-email">{leads.email}</h2>
        <h2 className= "client-number">{leads.phone_number}</h2>
        <div className="client-edit">
        <FaEdit/>
        </div>
        <div className="client-trash">
        <BsTrash/>
        </div>
        </div>
        
        </div>
       
       
    )
}

export default Leads;
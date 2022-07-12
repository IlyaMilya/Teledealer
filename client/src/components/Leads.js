

import react from 'react'


function Leads({lead}) {


    return(

            <div className= "leads-container">

        <h1 className="client-name">{lead.full_name}</h1>
        <h2 className="client-email">{lead.email}</h2>
        <h2 className= "client-number">{lead.phone_number}</h2>
       
        </div>
       
    )
}

export default Leads;
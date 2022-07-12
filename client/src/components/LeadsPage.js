import react from 'react';
import Leads from './Leads';


function LeadsPage({lead}) {

    console.log("hi", lead)
    
    return (
        <main className= "main-leads">
        <div className= "leads-div">
        <div className="leads-header"> LEADS </div>
        {lead.map((element) => {
        return (<Leads lead={element} />
        )
        })}
     </div>
     
    </main>

    )   
    

    
    }
   

export default LeadsPage;
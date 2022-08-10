import react from 'react';
import Leads from './Leads';
import Sidebar from './Sidebar'
import "../leads.css" 

function LeadsPage({leads, employee}) {

    console.log("hi", leads)

    const emleads = employee.leads
    


    return (
        <div>
        <Sidebar />
        
        <div>
        
        <div className= "leads-div">
        {/* <div className="leads-header"> LEADS </div> */}
        {emleads.map((element) => {
        return (<Leads leads={element} />
        )
        })}
        <button className="addlead-bttn">
        ADD LEAD
        </button>
        <div className= "leads-more-space">
            <div>

            </div>

        </div>

     </div>
     </div>
     
    </div>

    )   
    

    
    }
   

export default LeadsPage;
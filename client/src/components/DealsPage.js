import react from 'react'
import Deals from '../components/Deals'
import Sidebar from '../components/Sidebar'

function DealsPage ({deals, employee}) {

    console.log("forgi", employee)

    const emdeals = employee.deals
    return(
    // <main classname="main">
    


        <div>
        <div className="deals-div">
    {emdeals.map((element) => {
        return (<Deals deal={element} />
        )
    })
   
    }
     <button className="add-deals" > New deal </button>
    </div>
    // </div>
     
    // </main>
    )
    

}

export default DealsPage;
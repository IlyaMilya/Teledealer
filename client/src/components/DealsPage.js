import react from 'react'
import Deals from '../components/Deals'


function DealsPage ({deals}) {

    return(
    // <main classname="main">
    // <div className="big-deals-div">
        <div className="deals-div">
            <div className="deals-header">DEALS FILED</div>
    {deals.map((element) => {
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
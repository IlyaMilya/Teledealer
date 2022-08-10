


function Deals ({deal}) {


    const [showEdit, setShowEdit] = useState(true);

    function editButtonHandler() {
        setShowEdit(!showEdit);
      }
      
    return ( 
       
       <div className="deals-container">
        <h1  className="loan-amount">loan amount: ${deal.loan_amount}</h1>
            <div className="basic-deal-info">
        <p>
        loan recipient: {deal.client_name}
        </p>
        <p>
        comment: {deal.comment}
        </p>
        </div>
         <button className="confirm-button">Confirm</button>
        </div>
        
         
        
    )
}

export default Deals;
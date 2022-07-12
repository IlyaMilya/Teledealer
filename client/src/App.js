
import Sidebar from "./components/Sidebar";
import { Switch, Route} from "react-router-dom"
import Leads from "./components/LeadsPage";
import DealsPage from "./components/DealsPage";
import Guidelines from "./components/Guidelines";
import User from "./components/User";
import Login from "./components/Login";
import Home from "./components/Home";
import {useState, useEffect} from 'react';
import LeadsPage from "./components/LeadsPage";

function App() {

   const [dealsData, setDealsData]= useState([])
   const [leadsData, setLeadsData]= useState([])

    const request = async() => {
        const req = await fetch('/deals')
        const res = await req.json()
        setDealsData(res)
        
       
    }
    
    useEffect(() => {request() 
    }, [])

    console.log(dealsData, "gang gang")

    const leadstuff = async () =>{
      const req = await fetch('/leads')
        const res = await req.json()
      setLeadsData(res)
    }

    useEffect(() => {leadstuff() 
    }, [])

    console.log(leadsData, "leads2")

 return( 
 
<>
{/* <div className="big-div"> */}
<Sidebar/>
     
     
    
    <Switch>
        <Route exact path="/"> 
         <Login />
       </Route>
        <Route exact path="/deals"> 
          <DealsPage deals={dealsData} />
       </Route>
       <Route exact path="/leads"> 
          <LeadsPage lead={leadsData}/>
     </Route>
     <Route exact path="/guidelines"> 
          <Guidelines />
     </Route>
    </Switch>
    {/* </div> */}
 
  {/* <Switch>
    <Route exact path="/" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/leads" element={<Leads/>} />
    <Route path="/deals" element={<DealsPage deals={dealsData}/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/guidelines" element={<Guidelines/>} />
  </Switch> */}
  </>
 )
}

export default App;
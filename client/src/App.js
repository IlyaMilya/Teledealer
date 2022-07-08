
import Sidebar from "./components/Sidebar";
import { Switch, Route} from "react-router-dom"
import Leads from "./components/Leads";
import Deals from "./components/Deals";
import Guidelines from "./components/Guidelines";
import User from "./components/User";
import Login from "./components/Login";
import Home from "./components/Home";
import {useState, useEffect} from 'react';

function App() {

   const [dealsData, setDealsData]= useState([])

    const request = async() => {
        const req = await fetch('/deals')
        const res = await req.json()
        console.log(res, "test")
        setDealsData(res)
        console.log(dealsData, "data")
       
    }
    
    useEffect(() => {request() 
    }, [])

    console.log(dealsData, "gang gang")

 return( 
 
<>
 <Home/> 
  <Switch>
    <Route exact path="/" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/leads" element={<Leads/>} />
    <Route path="/deals" element={<Deals deals={dealsData}/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/guidelines" element={<Guidelines/>} />
  </Switch>
  </>
 )
}

export default App;

import Sidebar from "./components/Sidebar";
import { useNavigate, Routes, Route} from "react-router-dom"
import Leads from "./components/LeadsPage";
import DealsPage from "./components/DealsPage";
import Guidelines from "./components/Guidelines";
import User from "./components/User";
import Login from "./components/Login";
import Home from "./components/Home";
import {useState, useEffect} from 'react';
import LeadsPage from "./components/LeadsPage";
import Signup from "./components/Signup";

function App() {

   const [dealsData, setDealsData]= useState([])
   const [leadsData, setLeadsData]= useState([])
   const [loggedIn, setLoggedIn] = useState(false)
   const [employee, setEmployee] = useState(null)

   //login states
   const [render, setRender] = useState(false)
  const [sidebar, setSidebar] = useState(false)

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

    const user = async () => {
      const req = await fetch('/me')
      const res = await req.json()
      setEmployee(res)
    }

    useEffect(() => {
      user()
    }, [])

    console.log(employee, "user data")

    const nav= useNavigate()

    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
         setSidebar(false)
         setEmployee(null)
         setRender(false)
         nav('/')
        }
      });
    }

 return( 
 
<>
{/* <div className="big-div"> */}

 {/* <Sidebar/>  */}
  

     
 {sidebar ? (<Sidebar handleLogout={handleLogout} />) : (null)}
    
    <Routes>
        <Route path="/" element={<Login handleLogout={handleLogout} employee={employee} onLogin={setEmployee} setRender={setRender} render={render} setSidebar={setSidebar} sidebar={sidebar} />} /> 
       <Route path="signup" element={<Signup />} />
       <Route path="deals" element={<DealsPage deals={dealsData} employee={employee}/>} />
      <Route path="leads" element ={<LeadsPage leads={leadsData} employee={employee}/>} /> 
      <Route path= "user" element={<User employee={employee} />} />
     <Route path="guidelines" element={<Guidelines/> } />
    </Routes>
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
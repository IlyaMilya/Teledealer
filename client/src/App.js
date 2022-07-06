
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Leads from "./components/Leads";
import Deals from "./components/Deals";
import Guidelines from "./components/Guidelines";
import User from "./components/User";
function App() {
 return( 
 
   
<>
<Sidebar/>
  <BrowserRouter>
    <Route path="/leads" element={<Leads/>}/>
    <Route path="/deals" element={<Deals/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/guidelines" element={<Guidelines/>}/>
  </BrowserRouter>
  </>
 )
}

export default App;
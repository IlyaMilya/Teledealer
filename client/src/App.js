
import Sidebar from "./components/Sidebar";
import { Switch, Route} from "react-router-dom"
import Leads from "./components/Leads";
import Deals from "./components/Deals";
import Guidelines from "./components/Guidelines";
import User from "./components/User";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
 return( 
 
<>
  
  { <Sidebar/> }
  
  <Switch>
    <Route exact path="/" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/leads" element={<Leads/>} />
    <Route path="/deals" element={<Deals/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/guidelines" element={<Guidelines/>} />
  </Switch>
  </>
 )
}

export default App;
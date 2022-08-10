
import react, {useState, useEffect} from 'react';
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, JsonInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {GiRotaryPhone} from 'react-icons/gi' ;
import { useNavigate } from 'react-router-dom';
import DealsPage from './DealsPage';
import Sidebar from './Sidebar';

const Login = ({ onLogin, employee, setRender, render, setSidebar, sidebar, handleLogout }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleLogin(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => {
        console.log(r)
        if (r.ok) {
          r.json().then((employee) => onLogin(employee));
          setPassword('')
          setEmail('')
          setIsLoading(false);
        setRender(true)
        setSidebar(true)
        
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      });
    }
  
    
    const nav= useNavigate()
    

    return (
        <div className="login-container">
            <div>
            <div className="login-logo">
            <GiRotaryPhone/>TeleDealer 
            </div>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form id= "login-form" onSubmit={handleLogin} >
            <TextInput
              required
              label="email"
              name="email"
              placeholder="email"
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
            
            />
            <PasswordInput
              required
              label="Password"
              name="pass"
              placeholder="password"
              value= {password}
              onChange={(e) => setPassword(e.target.value)}
            //   {...form.getInputProps('password')}
            />
            {/* <Checkbox
              mt="md"
              label="I agree to sell my privacy"
            //   {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            /> */}
            <Group position="right" mt="md">
              <Button className="login-btn" type="submit" >Log in</Button>
              <a href="http://localhost:4000/signup"> Sign Up </a>
            </Group>
          </form>
        </Box>
        </div>
        {render ? (nav('/deals') ) : (null) }
        {sidebar ? (<Sidebar handleLogout={handleLogout} />) : (null)}
      
      </div>
      
    );
     

}


export default Login;

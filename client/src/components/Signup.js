
import react from 'react';
import {useForm} from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, JsonInput } from '@mantine/core';


 function Signup(){


//     // const [isSubmitted, setIsSubmitted] = useState(false);

//     //     const errors = {
//     //     fname: "give a proper full name",
//     //     imail: "invalid email",
//     //     pass: "invalid password",
//     //     };
    
//     //    function handleSubmit(event) {
//     //     //Prevent page reload
//     //     event.preventDefault();
    
//     //     let { fname, pass, imail } = document.forms[0];
    
    
//     //     fetch('/employees', {
//     //       method: 'POST', 
//     //       headers: {"Content-Type": "application/json"},
//     //       body: JSON.stringify({
//     //           full_name: fname.value,
//     //           email: imail.value,
//     //           password: pass.value,
//     //       }), })
//     //           .then((res)=>res.json()).then((data)=>{console.log(data)})
//     //             setIsSubmitted(true) 
                
//     //   }


//     }









//     const form = useForm({
//         initialValues: {
//           full_name: '',
//             email: '',
//           password: '',
//         },
//         // validate: {
//         //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//         // },
//       })

//     const handleSignup = async () => {
//         let form = new FormData(document.querySelector('#signup-form'))
//         let req = await fetch('/signup', {
//       method: 'POST',
//       body: form
    
//         })
//         let res = await req.json()
//       }

//       const handleSubmit = form.onSubmit((values) =>{
//         fetch('/login',{
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(values),
//         })
//         .then((res) => res.json()).then((data)=>console.log(data)) 
//     })


//       return(
        
//         <Box sx={{ maxWidth: 300 }} mx="auto">
//         <form onSubmit={handleSubmit}>
//           <TextInput
//             required
//             label="Username"
//             placeholder="username"
//             {...form.getInputProps('username')}
//           />
//           <PasswordInput
//             required
//             label="Password"
//             placeholder="password"
//             {...form.getInputProps('password')}
//           />
//           <Checkbox
//             mt="md"
//             label="I agree to sell my privacy"
//             {...form.getInputProps('termsOfService', { type: 'checkbox' })}
//           />
//           <Group position="right" mt="md">
//             <Button type="submit">Log in</Button>
//             <a href="http://localhost:4000/signup"> Sign Up </a>
//           </Group>
//         </form>
//       </Box>
//     );
      
 }

 export default Signup;

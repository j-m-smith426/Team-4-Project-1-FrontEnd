import React, { ChangeEvent, FormEvent, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row } from "reactstrap";

import { Auth } from "aws-amplify";
import './SignUp.css'
import SignUpInt from "../../../Entities/SignUp";
import axios from '../../../axiosConfig';

const SignUp:React.FC = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [message, setMessage] = useState('');
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [signUp, setSignUp] = useState<SignUpInt>({
        signName:'',
        signPass:'',
        signEmail:''
    })

    async function signUpSubmit() {
        try {
            const { user } = await Auth.signUp({
                username: signUp.signName,
                password: signUp.signPass,
                attributes: {
                    email: signUp.signEmail,          
                }
            });
            console.log(user);
            let newUser = {user:{TYPEID:"U#" + signUp.signName, REFERENCE: "0", email:signUp.signEmail}};
            axios.post('/users/add', newUser).then(response => {
                submitted = true;
                setMessage(`Submitted. Please check email for varification`);
            }).catch(error => {
                user.deleteUser((error, data) => {
                    Auth.signOut({global:true});
                });
                setMessage(error.message);
            });


        } catch (error) {
            console.log('error signing up:', error);
            setMessage(error.message);
        }
    }
    
    
    
    const handler = (input:ChangeEvent<HTMLInputElement>) =>{
        setSignUp({...signUp,[input.target.name]: input.target.value })
    }

    //Check submitted
    let submitted = false;

    //Submit information
    const submit = async (event: FormEvent) => {
        event.preventDefault();
            await signUpSubmit();
            if(submitted){
                setMessage(`Submitted. Please check email for varification`);
            }
            
    }
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
          
        >
          Sign Up
        </DropdownToggle>
        <DropdownMenu right>
          <Form inline className="px-4 py-3" onSubmit={submit}>
              
              <FormGroup>
              <Label htmlFor="signName">Username*</Label>
              <Input type="text" placeholder="Username" name="signName" onChange={handler}/>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="signPass">Password*</Label>
              <Input type="password" placeholder="Password" name="signPass" onChange={handler}/>
              </FormGroup>
              <FormGroup>
              <Label htmlFor="signEmail">Email*</Label>
              <Input type="email" placeholder="email" name="signEmail" onChange={handler}/>
                  </FormGroup>   
                  {`8 character Username
            Password needs 1 of each uppercase, lowercase, number, symbol`}
              <Input type="submit" value="Sign Up"/>
              {message}
          </Form>
        </DropdownMenu>
      </Dropdown>
    );
}

export default SignUp;
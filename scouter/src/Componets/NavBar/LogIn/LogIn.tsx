import React, { ChangeEvent, FormEvent, useState } from "react";
import { Col, Form, Input, NavLink, Row } from "reactstrap";
import { CognitoUser } from "@aws-amplify/auth";
import { User } from "../../../Entities/User";
import {Auth} from 'aws-amplify'
import './Login.css'
import SignUp from "../SignUp/SignUp";


interface Iprops{
    User: User
    isValid: (state:boolean) => void;
}

const LogIn:React.FC<Iprops> = (props:Iprops) => {

    const [user, setUser]= useState(props.User)
    
    
    const handler = (input:ChangeEvent<HTMLInputElement>) =>{
        setUser({...user,[input.target.name]: input.target.value })
    }

    const submit = async () => {
       
        try {
            let cogUser: CognitoUser= await Auth.signIn(user.Name, user.Password);
           
           console.log(cogUser);
           if(cogUser){
           sessionStorage.setItem("username", cogUser.getUsername());
            props.isValid(true);
           }
            
        console.log(cogUser.getUsername());
       } catch (error) {
           console.log('error signing in', error);
       }
        
        
    }


    return(
            <Form inline>
                <Row>
                    <Col>
                        <Input type="text" placeholder="UserName" name="Name" onChange={handler}/>
                    </Col>
                    <Col>
                        <Input type="password" placeholder="Password" name="Password" onChange={handler}/>
                    </Col>
                    <Col className="col-2 my-auto" id="login">
                        <NavLink onClick={submit} to='#'>log in</NavLink>
                    </Col>
                    
                    
                </Row>
            </Form>
    )
}
export default LogIn;
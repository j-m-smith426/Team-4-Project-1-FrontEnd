import React, { ChangeEvent, FormEvent, useState } from "react";
import { Col, Form, Input, NavLink, Row } from "reactstrap";
import { CognitoUser } from "@aws-amplify/auth";
import { User } from "../../../Entities/User";
import {Auth} from 'aws-amplify'


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
            let u: CognitoUser= await Auth.signIn(user.Name, user.Password);
           
           console.log(u);
           if(u){
           sessionStorage.setItem("username", u.getUsername());
            props.isValid(true);
           }
            
        console.log(u.getUsername());
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
                <Col className="col-2">
                <NavLink onClick={submit} to='#'>log in</NavLink>
                </Col>
                </Row>
            </Form>
    )
}
export default LogIn;
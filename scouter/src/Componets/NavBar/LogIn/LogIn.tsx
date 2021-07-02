import React, { ChangeEvent, useState } from "react";
import { Col, Form, Input, NavLink, Row } from "reactstrap";
import { CognitoUser } from "@aws-amplify/auth";
import { User } from "../../../Entities/User";
import { useDispatch } from "react-redux";
import {Auth} from 'aws-amplify'
import './Login.css'
import { LoginActions } from "../../../Redux/Actions";


interface Iprops{
   User:User

}

const LogIn:React.FC<Iprops> = (props:Iprops) => {

    const [user, setUser]= useState(props.User)
    const dispatch = useDispatch();
    
    const handler = (input:ChangeEvent<HTMLInputElement>) =>{
        setUser({...user,[input.target.name]: input.target.value })
    }

    const submit = async () => {
       
        try {
            let cogUser: CognitoUser= await Auth.signIn(user.Name, user.Password);
           
           console.log(cogUser);
           if(cogUser){
           dispatch({
               type:LoginActions.LOGIN,
               payload:{
                  name: cogUser.getUsername 
               }
           })
           
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



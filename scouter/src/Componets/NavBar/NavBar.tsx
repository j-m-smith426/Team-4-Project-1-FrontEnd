import React, { useState } from "react";
import { Button, Col, Form, Input, Nav, Navbar, NavItem, NavLink,  } from "reactstrap";
import { User } from "../../Entities/User";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import "./NavBar.css"

const newUser:User ={
    Name:"",
    Password:""
}

 const NavBar:React.FC<any> = (props) => {
    const [validUser, setValidUser] = useState(sessionStorage.getItem('username') ? true:false);
 
return(
    
    <div >
        <Navbar className="topBar" light expand="md">
        <Nav className="ms-auto" navbar>
        <NavItem>
           {validUser ?
           <NavLink >{sessionStorage.getItem("username")}</NavLink>:
            <LogIn User={newUser} isValid={setValidUser}/>
}
        </NavItem>
        {/* To be extracted out */}
                    <Col className=" my-auto" id="signup">
                        <SignUp/>
                    </Col>
        </Nav>
                
 
            
        </Navbar>
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink to='/' >Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to='/' >Anime</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ms-auto" navbar>
            <NavItem>
                <Form className="d-flex">
                <Input type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                </NavItem>
                
            </Nav>
        </Navbar>
        
    </div>
)


}

export default NavBar;

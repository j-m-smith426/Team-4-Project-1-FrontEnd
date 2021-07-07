import React from "react";
import { Button, Col, Form, Input, Nav, Navbar, NavItem, NavLink,  } from "reactstrap";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { IAppState } from "../../Redux/State";
import { RootState } from "../..";


 const NavBar:React.FC<any> = (props) => {
  const currentUser = useSelector((state:IAppState) =>{
     return state.ILogin.username
  })  
 
return(
    
    <div >
        <Navbar className="topBar" light expand="md">
        {currentUser === "Guest" ?
        <Nav className="ms-auto" navbar>
        <NavItem>
            <LogIn User={{Name:'',Password:''}} />
        </NavItem>
        {/* To be extracted out */}
                    <Col className=" my-auto" id="signup">
                        <SignUp/>
                    </Col>
        </Nav>:
        <Nav className="ms-auto" navbar>
        <NavItem>          
           <Link to ={'/user/'+ currentUser}>{currentUser}</Link>          
        </NavItem>
        {/* To be extracted out */}
                    <Col className=" my-auto" id="signup">
                        Sign Out
                    </Col>
        </Nav>
 }
                
 
            
        </Navbar>
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
            <NavItem>
                <Link id = "Home" to='/'>Home</Link>
                </NavItem>
                <NavItem>
                <Link to='/anime' >Anime</Link>
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

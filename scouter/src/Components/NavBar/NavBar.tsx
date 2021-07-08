import React from "react";
import { Button, Col, Form, Input, Nav, Navbar, NavbarBrand, NavItem, NavLink,  } from "reactstrap";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { IAppState } from "../../Redux/State";
import { RootState } from "../..";
import logo  from './logo.png';

 const NavBar:React.FC<any> = (props) => {
  const currentUser = useSelector((state:IAppState) =>{
     return state.ILogin.username
  })  
 
return(
    
    <div >
        <Navbar className="topBar" light expand="md">
        <img id="logo" src={logo} alt="logo"  height="60" width="200"/>
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
        <Navbar light expand="md">
            <Nav id="botBar" className="mr-auto" navbar>
            <NavItem>
                <Link id="toHome" to='/' >Home</Link>
                </NavItem>
                <NavItem>
                <Link id="toAnime"to='/anime' >Anime</Link>
                </NavItem>
            </Nav>
            <Nav className="ms-auto" navbar>
            <NavItem>
                <Form className="d-flex">
                <Input type="text" placeholder="Search" className="mr-sm-2" />
                <Button id="btnSearch" variant="outline-info">Search</Button>
                </Form>
                </NavItem>
                
            </Nav>
        </Navbar>
        
    </div>
)


}

export default NavBar;

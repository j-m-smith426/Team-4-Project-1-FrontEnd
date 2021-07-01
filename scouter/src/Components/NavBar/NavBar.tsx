import React from "react";
import { Button, Form, Input, Nav, Navbar, NavbarText, NavItem, NavLink,  } from "reactstrap";
import "./NavBar.css"
import logo from '../../images/logo.png';
 const NavBar:React.FC<any> = (props) => {
    
return(
    <div >
        <Navbar className="topBar" light expand="md">
            <Nav className="ms-auto" navbar>
            <img id="logo" src={logo} alt="logo"/>
                <Form className="d-flex">
                    <Input className="uInfo" type="text" placeholder="UserName" /><p></p>
                    <Input className="uInfo" type="text" placeholder="Password" /><p></p>
                    <p></p><Input className="login" type="button" value="Login"/>
                    <Input className="signup" type="button" value="Sign Up"/>
                    
                </Form>
                {/* To be extracted out */}
                
            </Nav>
        </Navbar>
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/' >Anime</NavLink>
            </Nav>
            <Nav className="ms-auto" navbar>
                <Form className="d-flex">
                <Input type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                
            </Nav>
        </Navbar>
        
    </div>
)


}

export default NavBar;

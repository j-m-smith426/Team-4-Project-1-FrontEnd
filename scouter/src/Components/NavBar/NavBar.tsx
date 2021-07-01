import React from "react";
import { Button, Form, Input, Nav, Navbar, NavbarText, NavLink,  } from "reactstrap";
import "./NavBar.css"

 const NavBar:React.FC<any> = (props) => {

return(
    <div >
        <Navbar className="topBar" light expand="md">
            <Nav className="ms-auto" navbar>
                <Form className="d-flex">
                    <Input type="text" placeholder="UserName" />
                    <Input type="text" placeholder="Password" />
                    <NavLink to='/' >Login  </NavLink>
                </Form>
                {/* To be extracted out */}
                <NavLink to='/' >Sign Up</NavLink>
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

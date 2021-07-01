import React from "react";
import { Col, Container, Row } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import './PageGrid.css'

const PageGrid:React.FC = (props) => {

    return(
        <Container>
            <Row>
                <NavBar />
            </Row>
            <Row className="color" >
                <Col  id="left">
                    Left
                </Col>
                <Col className="col-6" id="mid">
                    Mid
                </Col>
                <Col  id="right">
                    Right
                </Col>
            </Row>
        </Container>
    );

}
export default PageGrid;
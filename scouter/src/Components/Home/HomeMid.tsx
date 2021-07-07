import React from "react";
import { Row } from "reactstrap";
import { PostCreate } from "../Post/PostCreate";
import Alltime from "./Alltime/Alltime";

const HomeMid:React.FC = (props) => {
    return(
        <div>
        <Row>
            <Alltime />
        </Row>
        <Row>
            <PostCreate/>
        </Row>
        </div>
    )
} 
export default HomeMid;
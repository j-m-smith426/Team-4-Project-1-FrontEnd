import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import { IPost } from "../../Entities/Post";
import './PostView.css';

interface Iprops{
    post:IPost
}

function timeDifference(oldTime:Date){
    let currentTime = new Date();
    let differenceTimeMill  = currentTime.getTime()- oldTime.getTime();
    let differenceTimeSeconds = Math.floor(differenceTimeMill/(1000));
    let differenceTimeMin = Math.floor(differenceTimeSeconds / 60);
    let differentTimeHour = Math.floor(differenceTimeMin / 60);
    let differenceDays = Math.floor(differentTimeHour/24)
    if(differenceTimeMin < 1){
        return `posted ${differenceTimeSeconds} seconds ago `
    }
    if(differentTimeHour < 1){
        return `posted ${differenceTimeMin} Minutes ago `
    }
    
    if(differentTimeHour < 24){
        return `posted ${differentTimeHour} hours ago `
    }
    return `posted ${differenceDays} days ago `

}

export const DisplayPost:React.FC<Iprops> = (props:Iprops) => {

    return(
        <Col className='col-10'>
        <Row>
            
            <Card>
            <CardTitle tag="h6">{props.post.AuthorID}</CardTitle>
            <Card>
                <CardBody>      
                    
                    <CardText>{props.post.Content.text}</CardText>
                    
                </CardBody>
            </Card>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{timeDifference(props.post.Timestamp)}</CardSubtitle>
            </Card>
           
        </Row>
        </Col>
    )
}
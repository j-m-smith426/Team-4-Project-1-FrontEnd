import { prependOnceListener } from "process";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import { IPost } from "../../Entities/Post";
import { Storage } from "aws-amplify";
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
    const getImg = () =>{
        let img = props.post.Content.Img;
        let body = new FileReader();
        let result:any;
        body.onload = (event) =>{
            result = body.result;
            let cardimg = document.getElementById(props.post.PostID) as HTMLImageElement
            cardimg.src = result;
        };
        if(img){
            Storage.get(img,{download:true}).then(p => {
               let obj = p as any
               body.readAsDataURL(obj.Body);
            });       
    }
    return 'empty';
    }

    

    return(
        <Col className='col-10'>
        <Row>
            
            <Card>
            <CardTitle tag="h6">
                <Link to= {'/user/'+props.post.AuthorID}>{props.post.AuthorID}</Link></CardTitle>
            <CardImg src={getImg()} hidden ={!Boolean(props.post.Content.Img)} id = {props.post.PostID} />
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
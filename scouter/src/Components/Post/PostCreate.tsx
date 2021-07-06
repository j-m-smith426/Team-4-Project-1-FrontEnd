import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Input } from "reactstrap";
import { IPost } from "../../Entities/Post";
import { IAppState } from "../../Redux/State";
import { useSelector, useDispatch } from "react-redux";
import { CreatePostActions } from "../../Redux/Actions";
import './PostCreate.css'
import { timeStamp } from "console";

export const PostCreate:React.FC = (props) =>{
    const [message, setMessage] = useState('');
    const currentUser = useSelector((state:IAppState) =>{
            return state.ILogin.username
           })
    const dispatch = useDispatch();

    function post(){
        const TimeStamp = new Date();
        const newPost:IPost = {
            ParentID: '0',
            AuthorID: currentUser,
            Timestamp: TimeStamp,
            PostID:currentUser+'-'+TimeStamp,
            Content:{
                text:message
            },

        };
        console.log(newPost.PostID);
        if(!newPost.Content.text.match('/^ *$/')){
        dispatch({
            type:CreatePostActions.CREATE,
            payload:{
                Post:newPost
            }
        })
    }else{
        console.log('Must Contain Text');
    }
        
    }
    
    const keyHandler = (event:KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter'){
            post();
        }
    }
    
    const handler = (input:ChangeEvent<HTMLInputElement>) =>{
       
        setMessage( input.target.value )
    }
    
    
    return(
        <Card>
        <Form>
            <FormGroup row>
                
                <Col>
                    <Input type="textarea" name="text" id="exampleText" onChange={ handler} onKeyDown={keyHandler} />
                </Col>
            </FormGroup>
            
               
                
            
        </Form>
        <Col className='mr-auto'>
        <Button size='md'  onClick={post}>Post</Button>
        </Col>
        </Card>
    )
}
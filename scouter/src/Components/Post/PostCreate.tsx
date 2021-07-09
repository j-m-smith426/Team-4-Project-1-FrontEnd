import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Input, CardImg, Label } from "reactstrap";
import { IPost } from "../../Entities/Post";
import { IAppState } from "../../Redux/State";
import { useSelector, useDispatch } from "react-redux";
import { CreatePostActions } from "../../Redux/Actions";
import { Storage } from "aws-amplify";
import './PostCreate.css'
import { timeStamp } from "console";
import { allowedNodeEnvironmentFlags } from "process";
import axios from '../../axiosConfig';
import { RouteComponentProps, withRouter } from "react-router-dom";

type SelectPageMidProps = RouteComponentProps<{animeID:string,userID:string}>;

const PostCreate:React.FC<SelectPageMidProps> = ({match}) =>{
    const [message, setMessage] = useState('');
    const [imgFile,setImgFile] = useState(new File([],'empty'));
    const [currentUser, CurrentPage] = useSelector((state:IAppState) =>{
            return [state.ILogin.username, state.IPageState.PageID];
           })
    const dispatch = useDispatch();

    async function post(){
       
            let imgKey = '';
            if(imgFile){
        if(createImgURL() === 'empty' || imgFile.name !== 'empty'){
            await Storage.put(currentUser+'/'+imgFile.name, imgFile);
            imgKey = currentUser+'/'+imgFile.name
        }
    }
        const TimeStamp = new Date();
        const newPost:IPost = {
            ParentID: 'A#'+CurrentPage,
            AuthorID: currentUser,
            Timestamp: TimeStamp,
            PostID:currentUser+'-'+TimeStamp,
            Content:{
                text:message,
                Img: imgKey
            },

        };
        
        console.log(match.params.animeID);
        axios.post('/Post/add', {
            comment:{
                TYPEID: newPost.ParentID,
                content: newPost.Content.text,
                image:newPost.Content.Img,
                REFERENCE: `${newPost.AuthorID}#P#${newPost.PostID}#${newPost.ParentID}`,
                timeStamp:newPost.Timestamp
            }
        })
            
        dispatch({
            type:CreatePostActions.CREATE,
            payload:{
                Post:newPost,
                
            }
        })
        setImgFile(new File([],'empty'));
        let form =document.getElementById('Post') as HTMLFormElement
        form.reset();
       

    }
        
    

    const addIMG = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        if(event.target.files){
        setImgFile(event.target.files[0]);
        }else{
            setImgFile(new File([],'empty'))
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
    const createImgURL = ()=>{
        if(imgFile){
            let url = URL.createObjectURL(imgFile)
            console.log(url);
            return url}
        else{
            return 'empty';
        }
    }
    
    
    return(
        <Card>
            <CardImg src={createImgURL()} hidden = {createImgURL() === 'empty' || imgFile.name === 'empty'}></CardImg>
        <Form id='Post'>
            <FormGroup row>
                
                <Col>
                    <Input type="textarea" name="text" id="exampleText" onChange={ handler} onKeyDown={keyHandler} />
                </Col>
            </FormGroup>
            
               
            <Col className='ml-auto'>
        
        <Input type='file'  name='commentIMG' id='commentIMG' onChange={addIMG}></Input>
        
        <Button id="btnPost" size='md'  onClick={post}>Post</Button>
        </Col>
            
        </Form>
        
        </Card>
    )
}
export default withRouter(PostCreate);
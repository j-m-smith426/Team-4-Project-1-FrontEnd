import React from "react";
import { Row } from "reactstrap";
import { DisplayPost } from "../Post/PostView";
import './LoadComments.css'
import { IPost } from "../../Entities/Post";
import { useSelector } from "react-redux";
import {IAppState} from '../../Redux/State'

export const LoadComments:React.FC = (props) =>{
    const pagePosts = useSelector((state:IAppState)=>{
       return state.IPageState.Posts;
        
    });
    const revpagePosts = pagePosts.reverse();
    return(
        <div className='comment'>
            {revpagePosts.map((currentPost) =>(<DisplayPost post = {currentPost} key = {currentPost.PostID}/>))}
        </div>
    )
}
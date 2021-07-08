import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { IAppState, IPageState } from "../../Redux/State";
import  PostCreate  from "../Post/PostCreate";
import { DisplayPost } from "../Post/PostView";
import { LoadComments } from "../LoadCommands/LoadComments";
import AnimeCard from  "./AnimeCard/AnimeCard"
import AnimeCommentCard from "./AnimeCommentCard/AnimeCommentCard";
import axios from "../../axiosConfig";
import { useEffect } from "react";
import { useState } from "react";
import { IPost } from "../../Entities/Post";
import { CreatePostActions } from "../../Redux/Actions";

type AnimePageMidProps = RouteComponentProps<{animeID:string}>;

export interface IComment {
    TYPEID: string;
    content: string;
    image:string;
    REFERENCE: string;
    
}

const AnimePageMid:React.FC<AnimePageMidProps> = ({match}) => {
    
    let animeID = match.params.animeID;
    let dispatch = useDispatch();
       axios.get('/Post/Anime/'+animeID).then(response =>{
        console.log(response.data);
        let posts =response.data.users;
    
    let PostArr:IPost[] =[]
    if(posts.length){
    for(let i of posts){
        let newPost:IPost = {
            ParentID:i.REFERENCE.split('#')[3],
            AuthorID:i.REFERENCE.split('#')[0],
            PostID:i.REFERENCE.split('#')[2],
            Timestamp:new Date(Date.parse(i.REFERENCE.split('#')[2].split('-')[1])),
            Content:{
                text:i.content,
                Img:i.image
        }
    }
    PostArr.push(newPost);   
    }
}
console.log(posts);
    dispatch({
        type:CreatePostActions.Load,
        payload:{
            Posts:PostArr
        }
    })
})
    return(
        <div>
        <Row>
            <p>{animeID}</p>
            <AnimeCommentCard/>
          
        </Row>
        <LoadComments />
        </div>
    )
}

export default withRouter(AnimePageMid);

/*
 <PostCreate/> line 25
 */
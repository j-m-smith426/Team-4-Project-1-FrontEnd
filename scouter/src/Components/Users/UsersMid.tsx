import React from "react";
import UserFavoritesCard from "./UserFavorites/UserFavorites";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router";
import { Container } from "reactstrap";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import { CreatePostActions, SwitchPageAction } from "../../Redux/Actions";
import axios from "../../axiosConfig";
import { useDispatch } from "react-redux";
import { IPost } from "../../Entities/Post";
import { LoadComments } from "../LoadCommands/LoadComments";
import UserEdit from "./UserEdit";
import UserDisplay from "./UserDisplay";
import PostCreate from "../Post/PostCreate";

type UserPageMidProps = RouteComponentProps<{userID:string}>;

const UserPageMid:React.FC<UserPageMidProps> = ({match}) => {
    let userID = match.params.userID;
    
    let dispatch = useDispatch();
       axios.get('/Post/User/'+userID).then(response =>{
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
    type:SwitchPageAction.UPDATE,
    payload:{
        name:userID
    }
});
    dispatch({
        type:CreatePostActions.Load,
        payload:{
            Posts:PostArr
        }
    })
})
    
    
    
    
    
    return(
      <div>
        <p>{userID}</p>
        
        <Switch>
        <Route path="/user/:userID/favorites">
            <UserFavoritesCard/>
        </Route>
        <Route path="/user/:userID">
            <PostCreate/>
            <LoadComments />
        </Route>
        </Switch>
        {/* <UserProfileCard/>
        <UserFavoritesCard/> */}
        
    </div>
  
  
    )
}

export default withRouter(UserPageMid);
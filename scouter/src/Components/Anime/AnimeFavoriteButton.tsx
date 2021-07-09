import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "reactstrap";
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
import { CreatePostActions, SwitchPageAction } from "../../Redux/Actions";
import Amplify, { Auth } from "aws-amplify";
import { ContactsOutlined } from "@material-ui/icons";

export interface AFBProps {
    favorite: string;
 }
const AFB:React.FC<AFBProps> = (props) => {
    const [currentUser, CurrentPage] = useSelector((state:IAppState) =>{
        return [state.ILogin.username, state.IPageState.PageID];
       })
    const [message, setMessage] = useState<string>("Add Favorite");
    const [disabled, setDisabled] = useState<boolean>(false);
    useEffect(() => {
        axios.get('/users/' + currentUser).then(response => {
            console.log("FAVORITES:" + response.data.users);
            if(response.data.users != null){
                console.log("FAVORITES:" + response.data.users.favorites);
                if(Array.isArray(response.data.users.favorites) && response.data.users.favorites.includes(props.favorite)){
                    setMessage("Favorited!");
                    setDisabled(true);
                }}
        }).catch(error => {
          });
    }, [currentUser])
       if(currentUser != "Guest"){
        return(
            <Button data-testid="btnFav" id="afb" size='md'  disabled = {disabled} onClick={(e) => addFavorite(props.favorite, currentUser)}> {message}</Button>
        )
       } else {
           console.log("Not Logged In");
           return (<div/>);
       }
       function addFavorite(favorite:string, userID:string){
        axios.get('/users/' + userID).then(response => {
            if(response.data.users != null){
                if(response.data.users != null){
                    const arr = response.data.users.favorites;
                    if (!arr || !Array.isArray(arr)) {
                            response.data.users.favorites = [favorite];
                            const newUser = {user:response.data.users};
                            axios.post('/users/add', newUser).then(response => {
                            setMessage("Favorite Added!");
                            setDisabled(true);
                        }).catch(error => {
                            setMessage("An Error has Occured");
                        });
                    } else if (!arr.includes(favorite)) {
                        response.data.users.favorites.push(favorite);
                        const newUser = {user:response.data.users};
                        axios.post('/users/add', newUser).then(response => {
                            setMessage("Favorite Added!");
                            setDisabled(true);
                        }).catch(error => {
                            setMessage("An Error has Occured");
                        });
                    } else {
                        setMessage("This anime is already one of your favorites!");
                        setDisabled(true);
                    }    
                }
            }
        }).catch(error => {
            setMessage("An Error has Occured");
          });
    }
}
export default AFB;

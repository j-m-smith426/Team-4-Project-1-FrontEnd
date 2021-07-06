import React from "react";
import UserFavoritesCard from "../UserFavorites/UserFavorites";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import { Container } from "reactstrap";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

const UserPageMid:React.FC = (props) => {
    return(
      <div>
        <p>User Mid</p>
        <UserProfileCard/>
        <UserFavoritesCard/>
        
    </div>
  
  
    )
}

export default UserPageMid;
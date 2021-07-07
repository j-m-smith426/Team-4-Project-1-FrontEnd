import React from "react";
import UserFavoritesCard from "./UserFavorites/UserFavorites";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router";
import { Container } from "reactstrap";
import UserProfileCard from "./UserProfileCard/UserProfileCard";

type UserPageMidProps = RouteComponentProps<{userID:string}>;

const UserPageMid:React.FC<UserPageMidProps> = ({match}) => {
    let userID = match.params.userID;
    
    return(
      <div>
        <p>{userID}</p>
        <Switch>
        <Route path="/user/:userID/favorites">
            <UserFavoritesCard/>
        </Route>
        </Switch>
        {/* <UserProfileCard/>
        <UserFavoritesCard/> */}
        
    </div>
  
  
    )
}

export default withRouter(UserPageMid);
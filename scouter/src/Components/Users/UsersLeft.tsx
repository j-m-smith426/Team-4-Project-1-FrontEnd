import React from "react";
import UserCard from "./UserCard/UserCard";
import { RouteComponentProps, withRouter } from "react-router";


type UserPageProps = RouteComponentProps<{userID:string}>;
const UserPageLeft:React.FC<UserPageProps> = ({match}) => {
    let userID = match.params.userID
    
    return(
       
       
        <UserCard/>
    )
}

export default withRouter(UserPageLeft);
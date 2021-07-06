import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import UserAll from "./UserAll";
type UserPageMidProps = RouteComponentProps<{user:string}>;
const UserPageMid:React.FC<UserPageMidProps> = ({match}) => {
    
    let username = match.params.user;

    return(
        <p>
            <UserAll user = {username} ></UserAll>
        </p>

    )
}

export default withRouter(UserPageMid);
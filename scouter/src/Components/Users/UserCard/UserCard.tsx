import React, { useState } from 'react'
import "./UserCard.css";
import {UserStory} from "../../../Helpers/UserData";
import {Link} from 'react-router-dom'
import { RouteComponentProps, withRouter } from "react-router";
type UserPageProps = RouteComponentProps<{userID:string}>;
const UserCard:React.FC<UserPageProps> = ({match}) => {
    let userID = match.params.userID
    
    const [currImg, setCurrImg]=useState(0)
    return (
       
        <div className="userCard">
            <div className="userCardInner">
                <img src={UserStory[currImg].userPic}alt="User Picture"/>
                <h3>{UserStory[currImg].userName} </h3>
                <fieldset className="userBioBox">
                    <legend>Bio:</legend>
                    <p className="userBioInfo">
                        {UserStory[currImg].userBio}

                    </p>
                </fieldset>
                <li>
                <Link to={`/user/${userID}/favorites`} >Favorites</Link>
                </li>
                <li>
                <Link to={`/user/${userID}/watchList`}>Watch List</Link>
                </li>
            </div>
            
        </div>
    )
}
export default withRouter(UserCard);
import React, { useState } from 'react'
import "./UserCard.css";
import {UserStory} from "../../Helpers/UserData";


function UserCard() {
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
                
                <a href="/user/:userID/favorites" >Favorites</a>
                <p></p>

                <a href="/user/:userID/watchList">Watch List</a>
            </div>
            
        </div>
    )
}
export default UserCard
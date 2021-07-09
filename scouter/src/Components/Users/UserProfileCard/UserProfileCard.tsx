import React, { useState } from 'react'

function UserProfileCard() {
    return(
        <div>
            <h1>User Name: </h1>
            <h3>Email:</h3>
            <fieldset>
                <legend className="userProfBioLabel">My Info</legend>
                <p className="userProfBio">Some stuff and things</p>
            </fieldset>        
        </div>  
    )
}
export default UserProfileCard;
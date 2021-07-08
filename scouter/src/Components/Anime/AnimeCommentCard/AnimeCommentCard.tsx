import React, { useState } from 'react'
import "./AnimeCommentCard.css";
import {LoadComments} from "../../LoadCommands/LoadComments"
import  PostCreate  from '../../Post/PostCreate';
function AnimeCommentCard() {
    
    return (
        
        <div className="animeCommentCard">
            <div className="animeCommentCardInner">
                <img src="" alt="Anime Picture"/>
                <h3>Anime Title: </h3>
                <fieldset className="animeCommentsBox">
                    <legend>Comments:</legend>
                    
                        <PostCreate/>

                    
                </fieldset>
                
                
            </div>
            
        </div>
    )
}
export default AnimeCommentCard
import React, { useState } from 'react'
import "./AnimeCard.css";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
function AnimeCard() {
    
    return (
        
        <div className="animeCard">
            <div className="animeCardInner">
                <img src="" alt="Anime Picture"/>
                <h3>Anime Title: </h3>
                <fieldset className="animieInfoBox">
                    <legend>Synopsis:</legend>
                    <p className="animeInfo">
                    </p>
                </fieldset>
                
                <a id="animeCommentLink" href="/anime/:animeId" >Comments</a>
                <p></p>
                <a id="animeRatingsLink" href="/anime/:animeId" >Ratings</a>

              
            </div>
            
        </div>
    )
}
export default AnimeCard
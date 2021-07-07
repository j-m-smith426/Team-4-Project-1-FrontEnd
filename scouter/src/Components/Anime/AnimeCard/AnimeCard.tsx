import React, { useState } from 'react'
import "./AnimeCard.css";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
function AnimeCard() {
    
    return (
        
        <div className="animeCard">
            <div className="animeCardInner">
                <img src="../images/moon.jpg" alt="User Picture"/>
                <h3>Anime Title: </h3>
                <fieldset className="animieInfoBox">
                    <legend>Synopsis:</legend>
                    <p className="animeInfo">

                    </p>
                </fieldset>
                
                <a href="/anime/:animeId" >Comments</a>
                <p></p>

              
            </div>
            
        </div>
    )
}
export default AnimeCard
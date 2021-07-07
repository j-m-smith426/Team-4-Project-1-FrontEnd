import React, { useState } from 'react'
import "./UserFavorites.css";
import {UserStory} from "../../../Helpers/UserData";
import AnimeCard from '../../Anime/AnimeCard/AnimeCard';

function UserFavoritesCard() {
    const [currImg, setCurrImg]=useState(0)
    return (
       
        <div className="userFavCard">
            <div className="userFavCardInner">
                <img src={UserStory[currImg].userPic}alt="User Picture"/>
                <h3>{UserStory[currImg].userName} </h3>
            
                    <section className="userFavorites">
                       <AnimeCard/>    
                       <AnimeCard/>              
                    </section>
                
                
               
            </div>
            
        </div>
    )
}
export default UserFavoritesCard
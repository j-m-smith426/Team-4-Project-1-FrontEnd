import React, { useState } from 'react'
import "./UserFavorites.css";

import AnimeCard from '../../Anime/AnimeCard/AnimeCard';

function UserFavoritesCard() {
    const [currImg, setCurrImg]=useState(0)
    return (
       
        <div className="userFavCard">
            <div className="userFavCardInner">
             
              
                    <section className="userFavorites">
                       <AnimeCard/>    
                                
                    </section>
                
                
               
            </div>
            
        </div>
    )
}
export default UserFavoritesCard
import React from "react";
import { Link } from "react-router-dom";
import './HomeLeft.css'

const HomeLeft:React.FC = (props) => {
    //routes that link to specific anime pages
    return(
        <div id="divLeft">
        <h6>Top 5 Anime</h6>
        <Link to='Anime/DragonBallZ'>1. Dragon Ball Z</Link>
        <br/>
        <Link to='Anime/DemonSlayer'>2. Demon Slayer</Link>
        <br/>
        <Link to='Anime/Onepiece'>3. One Piece</Link>
        <br/>
        <Link to='Anime/Naruto'>4. Naruto</Link>
        <br/>
        <Link to='Anime/AttackOnTitan'>5. Attack on Titan</Link>
        </div>
    )
} 
export default HomeLeft;
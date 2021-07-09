import React from "react";
import { Link } from "react-router-dom";
import './HomeLeft.css'

const HomeLeft:React.FC = () => {
    //routes that link to specific anime pages
    return(
        <div id="divLeft">
        <h6 data-testId="hlh6">Top 5 Anime</h6>
        <Link data-testId="top1" to='Anime/DragonBallZ'>1. Dragon Ball Z</Link><br/>
        <Link data-testId="top2"to='Anime/DemonSlayer'>2. Demon Slayer</Link><br/>
        <Link data-testId="top3"to='Anime/Onepiece'>3. One Piece</Link><br/>
        <Link data-testId="top4"to='Anime/Naruto'>4. Naruto</Link><br/>
        <Link data-testId="top5"to='Anime/AttackOnTitan'>5. Attack on Titan</Link>
        </div>
    )
} 
export default HomeLeft; 
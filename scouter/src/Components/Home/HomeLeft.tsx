import React from "react";
import { Link } from "react-router-dom";
import './HomeLeft.css'

const HomeLeft:React.FC = (props) => {
    return(
        <div id="divLeft">
        <h6>Top 5 Anime</h6>
        <Link to='Anime/DragonBallZ'>1. DragonBallZ</Link>
        <br/>
        <Link to='Anime/DemonSlayer'>2. Deamon Slayer</Link>
        <br/>
        <Link to='Anime/Onepeice'>3. OnePeice</Link>
        </div>
    )
} 
export default HomeLeft;
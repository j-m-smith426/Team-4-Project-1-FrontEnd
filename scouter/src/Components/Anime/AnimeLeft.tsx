import React from "react";
import { Row } from "reactstrap";
import AnimeCard from "./AnimeCard/AnimeCard";
import './Anime.css';
const AnimePageLeft:React.FC = (props) => {
    //returns anime card which has all the information on a specific anime
    return(
        <div>
        <Row id='lRow'></Row>
        <AnimeCard/>
        </div>
    )
}

export default AnimePageLeft;
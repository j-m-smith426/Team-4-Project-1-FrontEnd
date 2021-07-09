import React from "react";
import { Row } from "reactstrap";
import './Anime.css';
import AnimeCardWrapper from "./AnimeCard/AnimeCardWrapper";
const AnimePageLeft:React.FC = (props) => {
    return(
        <div>
        <Row id='lRow'></Row>
        <AnimeCardWrapper/>
        </div>
    )
}

export default AnimePageLeft;
import React, { useState } from 'react'
import "./AnimeCard.css";
import { BrowserRouter as Router,
    Switch,
    Route, 
    RouteComponentProps,
    Link,
    withRouter} from "react-router-dom";

import {Storage} from 'aws-amplify'
import { useEffect } from 'react';
import axiosConfig from '../../../axiosConfig';
import AnimeCard from './AnimeCard';
import AFB from '../AnimeFavoriteButton';


export interface IAnime {
    TYPEID: string;
    REFERENCE: string;
    name: string;
    description:string;
    genres: string[];
    image:string;
    
}

let newAnime:IAnime = {
    TYPEID: '',
    REFERENCE: '',
    name: '',
    description:'',
    genres: [],
    image:''
}

type AnimePageMidProps = RouteComponentProps<{animeID:string}>;

const AnimeCardWrapper:React.FC<AnimePageMidProps> = ({match}) => {
    return (
        <div>
        <AnimeCard animeID={match.params.animeID}></AnimeCard>
        <AFB favorite={match.params.animeID}></AFB>
        </div>

    )
}
export default withRouter(AnimeCardWrapper);
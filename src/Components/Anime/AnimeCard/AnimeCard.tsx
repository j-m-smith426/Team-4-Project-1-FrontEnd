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
const AnimeCard:React.FC<{animeID: string}> = ({animeID}) => {
    const [anime,setAnime] = useState<any>(newAnime)
    useEffect(() =>{
        getAnime();
     },[]);

     const getAnime = async () =>{
        let animeResponse:any = 'null'; 
       axiosConfig.get('/Anime/'+ animeID).then(response =>{
           animeResponse = response.data;
           console.log(animeResponse);
           setAnime(animeResponse);
       })
   
    }

     console.log('Anime card: '+anime);
    
        let img = anime.image;
        let body = new FileReader();
        let result:any;
        body.onload = (event) =>{
            result = body.result;
            let cardimg = document.getElementById('AnimeProfile') as HTMLImageElement
            cardimg.src = result;
        };
        if(img){
            Storage.get(img,{download:true}).then(p => {
               let obj = p as any
               body.readAsDataURL(obj.Body);
            });       
    }


    return (
        
        <div className="animeCard">
            <div className="animeCardInner">
                <img alt="Anime Picture" id='AnimeProfile'/>
                <h3>{animeID}</h3>
                <fieldset className="animieInfoBox">
                    <legend>Synopsis:</legend>
                    <p className="animeInfo">
                        {anime.description}
                    </p>
                </fieldset>
              
            </div>
            
        </div>
    )
}
export default AnimeCard;
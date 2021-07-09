import React, { useEffect, useState } from 'react'
import "./UserFavorites.css";

import AnimeCard from '../../Anime/AnimeCard/AnimeCard';
import axios from '../../../axiosConfig';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { types } from 'util';
type UserPageProps = RouteComponentProps<{userID:string}>;

const UserFavoritesCard:React.FC<UserPageProps> = ({match}) => {
    const userID = match.params.userID;
    const [valid, setValid] = useState<any>("loading");
    const [favorites,setFavorites] = useState<any>();
    useEffect(() => {
        
        axios.get('/users/' + userID).then(response => {
            if(response.data.users != null){
                const arr = response.data.users.favorites;
                console.log(arr);
                if (!arr || !Array.isArray(arr)) {
                    setFavorites(
                        <div>
                            There are no favorites.
                        </div>)
                    setValid("valid");
                } else {
                    if(arr.length === 0){
                        setFavorites(
                            <div>
                                There are no favorites.
                            </div>)
                        
                    } else {
                        setFavorites( arr.map((fav:string) =>
                        <div className="userFavCard">
                            <div className="userFavCardInner">
                                <section className="userFavorites">
                                   <AnimeCard animeID={fav}/>    
                                            
                                </section>
                            </div>
                        </div>));
                    }
                    setValid("valid");
                }

            } else {
                setValid("invalid");
            }

        }).catch(error => {
            setValid("invalid");
          });

    }, [])
    if(valid === "loaading"){
        return (
            <div>
                Please Wait...
            </div>

        )
    } else if (valid === "valid") {
        return (
       
            favorites
        )
    } else {
        return (
            <div>
                An error has occured.
            </div>

        )
    }

}

export default withRouter(UserFavoritesCard);
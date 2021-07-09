import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import "./Anime.css";

//returns a list of anime using axios to get all anime from the db
const AnimeList:React.FC = (props) =>{
const [list,setList] = useState<Array<any>>([]);
useEffect(()=>{
    getList()
}, []);
//axios get all anime
const getList = () =>{
    axiosConfig.get('/anime/all').then(p =>{setList(p.data.anime)
    console.log(p.data);
    })
}
let nameList:string[] = [];
list.map((anime) => nameList.push(anime.TYPEID.split('#')[1]))
console.log(nameList);


return (
    <ListGroup>
            {nameList.map((anime) => (
                <ListGroupItem id="animeList" key={anime}>
                        <Link to={'/anime/'+anime}>{anime}</Link>
                </ListGroupItem>
                )
            )}
    </ListGroup>
)


}
export default AnimeList;
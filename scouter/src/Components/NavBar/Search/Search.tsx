import { input } from "aws-amplify";
import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Form, Input, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ListGroup, ListGroupItem } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
type SearchProps = RouteComponentProps<{key:string}>;
const Search:React.FC<SearchProps> = ({match}) =>{
    const [list,setList] = useState<Array<any>>([]);
   useEffect(()=>{
       getList();
   },[match.params.key])
    let nameList:string[] = [];
    const getList = () =>{
        axiosConfig.get('/anime/search/'+match.params.key).then(p =>{setList(p.data.anime)
        console.log(p.data);
        })
    }
    list.forEach((anime) => nameList.push(anime.TYPEID.split('#')[1]))
    return(  
        <ListGroup id="aniSearch">
            {nameList.map((anime) => (
                <ListGroupItem key={anime}>
                        <Link to={'/anime/'+anime}>{anime}</Link>
                </ListGroupItem>
                )
            )}
    </ListGroup>
    )
}
export default withRouter(Search);
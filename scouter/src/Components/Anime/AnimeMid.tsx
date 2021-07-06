import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import { IAppState, IPageState } from "../../Redux/State";
import { PostCreate } from "../Post/PostCreate";
import { DisplayPost } from "../Post/PostView";
import { LoadComments } from "../LoadCommands/LoadComments";
import AnimeCard from  "../AnimeCard/AnimeCard"
import AnimeCommentCard from "../AnimeCommentCard/AnimeCommentCard";

type AnimePageMidProps = RouteComponentProps<{animeID:string}>;

const AnimePageMid:React.FC<AnimePageMidProps> = ({match}) => {
    
    let animeID = match.params.animeID;
    


    return(
        <div>
        <Row>
            <p>{animeID}</p>
            <AnimeCommentCard/>
          
        </Row>
        <LoadComments />
        </div>
    )
}

export default withRouter(AnimePageMid);

/*
 <PostCreate/> line 25
 */
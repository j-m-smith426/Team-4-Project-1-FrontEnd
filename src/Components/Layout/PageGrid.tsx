import React from "react";
import {Col, Container, Row } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter as Router,
Switch,
Route } from "react-router-dom";
import './PageGrid.css'
import UserPageLeft from "../Users/UsersLeft";
import AnimePageLeft from "../Anime/AnimeLeft";
import AnimePageMid from "../Anime/AnimeMid";
import UserPageMid from "../Users/UsersMid";
import HomeMid from "../Home/HomeMid";
import HomeLeft from "../Home/HomeLeft";
import HomeRight from "../Home/HomeRight";
import UserFavoritesCard from "../Users/UserFavorites/UserFavorites";
import UserDisplay from "../Users/UserDisplay";
import AnimeList from "../Anime/AnimeList";
import Search from "../NavBar/Search/Search";

//grid is what an app.tsx does, maps out all of our components
const PageGrid:React.FC = (props) => {
    return(
        <Router>
        <Container>
            <Row>
                <NavBar />
            </Row>
            <Row className="color" >
                <Col  id="left">
                    {/* left Pages */}
                    <Switch>
                        <Route exact path="/">
                            <HomeLeft />
                        </Route>
                        <Route path="/user/:userID">
                            <UserPageLeft />
                        </Route>
                        <Route path="/anime/:animeID">
                            <AnimePageLeft />
                        </Route>
                    </Switch>
                </Col>
                <Col className="col-6" id="mid">
                    {/* Mid pages */}
                    <Switch>
                        <Route exact path="/">                            
                            <HomeMid />
                        </Route>
                        <Route path="/user/:userID/favorites">
                            <UserFavoritesCard />
                        </Route> 
                        <Route path="/user/:userID">
                            <UserPageMid/>
                        </Route>
                        <Route path="/user">
                            <UserPageMid />
                        </Route>                      
                        <Route path="/search/:key">
                            <Search/>
                        </Route>
                        <Route path="/anime/:animeID">
                            <AnimePageMid />
                        </Route>
                        <Route path='/anime'>
                            <AnimeList />
                        </Route>
                    </Switch>
                </Col>
                <Col  id="right">
                    {/* Right Pages */}                    
                    <HomeRight />                       
                </Col>
            </Row>
        </Container>        
        </Router>
    );
}
export default PageGrid;
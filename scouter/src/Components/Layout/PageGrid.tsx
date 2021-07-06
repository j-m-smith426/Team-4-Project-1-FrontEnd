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
import AnimePageRight from "../Anime/AnimeRight";
import UserPageRight from "../Users/UsersRight";
import UserPageMid from "../Users/UsersMid";
import HomeMid from "../Home/HomeMid";
import HomeLeft from "../Home/HomeLeft";
import HomeRight from "../Home/HomeRight";
import Carousel from "../Carousel/Carousel";
import UserFavoritesCard from "../UserFavorites/UserFavorites";
import UserDisplay from "../Users/UserDisplay";

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
                        <Route path="/user">
                            <UserPageLeft />
                        </Route>
                        <Route path="/anime">
                            <AnimePageLeft />
                        </Route>
                    </Switch>
                </Col>
                <Col className="col-6" id="mid">
                    {/* Mid pages */}
                    <Switch>
                        <Route exact path="/">
                            <Carousel/>
                            <HomeMid />
                        </Route>
                        <Route path="/user/:userID">
                            <UserDisplay />
                        </Route>
                        <Route path="/user">

                            <UserPageMid />
                        </Route>
<<<<<<< HEAD

=======
                        <Route path="/user/:userID">
                            <UserPageMid/>
                        </Route>
>>>>>>> eac5f77a1e71259f6a442449da51856ae362bef6
                        <Route path="/user/:userID/favorites">
                          <UserPageMid/>
                              <UserFavoritesCard/>
                             
                        
                        </Route>
                        <Route path="/anime/:animeID">
                            <AnimePageMid />
                        </Route>
                    </Switch>
                </Col>
                <Col  id="right">
                    {/* Right Pages */}
                    <Switch>
                        <Route exact path="/">
                            <HomeRight />
                        </Route>
                        <Route path="/user">
                            <UserPageRight />
                        </Route>
                        <Route path="/anime">
                            <AnimePageRight />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
        
        </Router>
    );

}
export default PageGrid;
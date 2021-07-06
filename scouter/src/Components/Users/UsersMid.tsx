import React from "react";
import UserFavoritesCard from "../UserFavorites/UserFavorites";
import { BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import { Container } from "reactstrap";

const UserPageMid:React.FC = (props) => {
    return(
      /*  <div>
        <p>User Mid</p>
        <UserFavoritesCard/>
        
    </div>
    */
   <Router>
       <Container>
                <Switch>
                        
                        <Route path="/user">

                            
                        </Route>
                        <Route path="/user/:userID">
                            
                        </Route>
                        <Route path="/user/:userID/favorites">
                          <div>
                          <UserFavoritesCard/>
                          </div>
                        </Route>
                       
                    </Switch>
                </Container>
     </Router>
    )
}

export default UserPageMid;
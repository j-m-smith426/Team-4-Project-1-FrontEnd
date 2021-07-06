import axios from '../../axiosConfig'
import React, { useEffect, useState } from "react";
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';

type UserPageProps = RouteComponentProps<{userID:string}>;

const UserDisplay:React.FC<UserPageProps> = ({match}) => {
    let userID = match.params.userID;
    const [username, setUsername] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [bio, setBio] = useState<any>(null);
    const [valid, setValid] = useState<any>("loading");

            /*axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              setUsers({ persons });*/
              
    useEffect(() => {
        
        axios.get('/users/' + userID).then(response => {
            if(response.data.users != null){
                setUsername(response.data.users.TYPEID.substring(2));
                setEmail(response.data.users.email);
                

                if(!response.data.users.profile){
                    setBio("This user has not filled out their profile.");
                } else {
                    setBio(response.data.users.profile);
                }
                setValid("valid");
            } else {
                setValid("invalid");
            }

        }).catch(error => {
            setValid("invalid");
          });

    }, [])
    if(valid === "invalid"){
        return(
            <Redirect to="/user"/>
        )
    } else if (valid === "valid") {
        return (
            <ul>
                Username: {username}
                <br/>
                Email: {email}
                <br/>
                Bio: {bio}
            </ul>
        )
    } else {
        return (
            <ul>
    
            </ul>
        )
    }

}

export default withRouter(UserDisplay);
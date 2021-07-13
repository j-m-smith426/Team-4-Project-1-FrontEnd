import axios from '../../axiosConfig'
import React, { useEffect, useState } from "react";
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, CardImg, Col } from 'reactstrap';
import UserEdit from './UserEdit';
import {Storage} from 'aws-amplify'
import { IAppState } from '../../Redux/State';
import {useSelector} from 'react-redux'

type UserPageProps = RouteComponentProps<{userID:string}>;

const UserDisplay:React.FC<UserPageProps> = ({match}) => {
    let userID = match.params.userID;
    let currentUser = useSelector((state:IAppState) =>{
        return state.ILogin.username;
    })
    
    const [username, setUsername] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [bio, setBio] = useState<any>(null);
    const [valid, setValid] = useState<any>("loading");
    const [Img, setImg] = useState('');

            /*axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              setUsers({ persons });*/
    async function edit(){
        setValid("edit");
    }          
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
                setImg(response.data.users.img);
                console.log(Img);
                

                setValid("valid");
            } else {
                setValid("invalid");
            }

        }).catch(error => {
            setValid("invalid");
          });

    }, [])

    const getImg = () =>{
        let img = Img;
        let body = new FileReader();
        let result:any;
        body.onload = (event) =>{
            result = body.result;
            let cardimg = document.getElementById('profile') as HTMLImageElement
            cardimg.src = result;
        };
        if(img){
            Storage.get(img,{download:true}).then(p => {
               let obj = p as any
               body.readAsDataURL(obj.Body);
            });       
    }
    return 'empty';
    }


    if(valid === "invalid"){
        return(
            <Redirect to="/user"/>
        )
    } else if (valid === "valid") {
        return (

            <ul>
                <CardImg src={getImg()} id='profile' height="120" width="200"/>
            <Col>
                Username: {username}
            </Col>
            <Col>
                Email: {email}
            </Col>
            <Col>
                Bio: {bio}
            </Col>
            <Button id="userPost" size='md' hidden={!(currentUser === userID)} onClick={edit}>Post</Button>
            
            </ul>
            
        )
    } else if (valid === "edit"){
        return (
            <UserEdit user = {username}></UserEdit>
        )
    } else {
        return (
            <ul>
    
            </ul>
        )
    }

}

export default withRouter(UserDisplay);
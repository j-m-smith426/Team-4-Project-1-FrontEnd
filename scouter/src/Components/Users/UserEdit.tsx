import axios from '../../axiosConfig'
import React, { ChangeEvent, Props, useEffect, useState } from "react";
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, CardImg, Col, Form, FormGroup, Input } from 'reactstrap';
import { Storage } from "aws-amplify";

const UserEdit:React.FC<{ user: string }> = ({user}) => {
    let userID = user;
    const [username, setUsername] = useState<any>(null);
    const [email, setEmail] = useState<any>(null);
    const [imgFile,setImgFile] = useState(new File([],'empty'));
    const [bio, setBio] = useState<any>(null);
    const [valid, setValid] = useState<any>("loading");
    const [error, setError] = useState<any>("");
    const [Img, setImg] = useState('');
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
                setImg(response.data.users.img);
                setValid("valid");
            } else {
                setValid("invalid");
            }

        }).catch(error => {
            setValid("invalid");
          });

    }, [])

    const biohandler = (input:ChangeEvent<HTMLInputElement>) =>{
       
        setBio( input.target.value )
    }

    async function post(){
        
        let imgKey = '';
        if(imgFile){
            if(createImgURL() === 'empty' || imgFile.name !== 'empty'){
                await Storage.put(userID+'/'+imgFile.name, imgFile);
                imgKey = userID+'/'+imgFile.name
            }
        }
        let newUser = {user:{profile:{},img:{}}};
        await axios.get('/users/' + userID).then(response => {
            if(response.data.users != null){
                newUser.user = response.data.users;
            } 
        }).catch(error => {
            setError("Server Error");
        });
        if (newUser.user != null){
            newUser.user.profile = bio;
            if(imgKey != null){
                newUser.user.img = imgKey;
            }
            axios.post('/users/add', newUser).then(response => {
                setValid("Profile");
            }).catch(error => {
                setError("Server Error");
            });
        } else {
            setError("Invalid user"); 
        }
        
        window.location.reload();

    }
    const createImgURL = ()=>{
        if(imgFile){
            let url = URL.createObjectURL(imgFile)
            console.log(url);
            return url}
        else{
            return 'empty';
        }
    }  


    const addIMG = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        if(event.target.files){
        setImgFile(event.target.files[0]);
        }else{
            setImgFile(new File([],'empty'))
        }
    }
    if(valid === "Profile"){
        return(<Redirect to={"/user/" + username} ></Redirect>)
    } else if(valid != "invalid"){
        return (
        <Form id='Post'>
            <CardImg src={createImgURL()} id='profile' />
        <Col>
            Username: {username}
        </Col>
        <Col>
            Email: {email}
        </Col>
        <Col>
            <Input type="textarea" name="text" id="exampleText" onChange={ biohandler} value = {bio} />
        </Col>
        <Col className='ml-auto'>
        <Input type='file'  name='commentIMG' id='commentIMG' onChange={addIMG}></Input>
        <Button size='md'  onClick={post}>Post</Button>
        </Col>
        <br></br>
        {error}
        </Form>
        )
    } else {
        return(
        <ul>
            There is an error.
        </ul>);


    }


}

export default UserEdit;
import axios from '../../axiosConfig'
import React, { useEffect, useState } from "react";

const UserList:React.FC = (props) => {

    const [users, setUsers] = useState<any>(null);

            /*axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              setUsers({ persons });*/
              
    useEffect(() => {
        axios.get('/users/all').then(response => {
            setUsers(response.data.users);
            
        }).catch(error => {
            setUsers(JSON.stringify(error));
          });

    }, [])
    return(
        <ul>
        Hello {JSON.stringify(users)}
      </ul>
    )
}

export default UserList;
import { useState } from "react";

const UserListPage = () => {

    let [users,setUsers] = useState([{username: 'user1', country: 'Sweden', age: 32},{username: 'user2', country: 'Norway',age: 22}])
    let [username,setUsername] = useState("");
    let [age,setAge] = useState("");
    let [country,setCountry] = useState("");

    let addUser = () => {
        setUsers([...users,{username,country,age}])
    }

    return(
        <>

            <h2>Userlist</h2>
            <h4>Add User:</h4>
            <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
            <br />
            <input type="number" placeholder="Age" onChange={(e) => {setAge(e.target.value)}}/>
            <br />
            <input type="text" placeholder="Country" onChange={(e) => {setCountry(e.target.value)}}/>
            <br />
            <button onClick={addUser}>Add User</button>


            <h2>Users</h2>
            <ul>
                {users.map(user => <li>{user.username}, {user.age} {user.country}</li>)}
            </ul>


        </>
    )
}

export default UserListPage;
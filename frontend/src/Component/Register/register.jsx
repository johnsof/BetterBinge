import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Register = ({props}) => {
    const [getMessage, setGetMessage] = useState({})

    const [getName, setName] = useState({})
    const [getEmail, setEmail] = useState({})
    const [getHandle, setHandle] = useState({})
    const [getPassword, setPassword] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:3000/register', 
            {
                name: getName,
                email: getEmail,
                handle: getHandle,
                password: getPassword
            }
            ).then(response => {
          console.log("SUCCESS", response)
          setGetMessage(response)
        }).catch(error => {
          console.log(error)
        })
      }

return (<header className="App-header">
        <p>Sign In</p>
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type = "text" onChange = {(e) => setName(e.target.value)}>
                </input>
            </label>
            <br/>
            <label>Email
                <input type = "text" onChange = {(e) => setEmail(e.target.value)}>
                </input>
            </label>
            <br/>
            <label>Handle
                <input type = "text" onChange = {(e) => setHandle(e.target.value)}>
                </input>
            </label>
            <br/>
            <label>Password
                <input type = "password" onChange = {(e) => setPassword(e.target.value)}>
                </input>
            </label>
            <br/>
            <button>Submit</button>
        </form>
      </header>)
}
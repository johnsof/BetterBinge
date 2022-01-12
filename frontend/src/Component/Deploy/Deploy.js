import axios from 'axios'
import React, { useEffect, useState } from 'react';

export const Deploy = ({props}) => {
    const [getMessage, setGetMessage] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3000/flask/hello').then(response => {
          console.log("SUCCESS", response)
          setGetMessage(response)
        }).catch(error => {
          console.log(error)
        })
      }, [])

    if(getMessage.status === 200) {
        return (<header className="App-header">
        <p>WELCOME</p>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>)
    }
    else {
        return(<h3>LOADING</h3>)
    }
    
}
import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import ReturnBtnCmp from './returnBtnCmp';
const MainApp = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("Click on the buttons to display the information");
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(results=>results.json())
        .then(result=>{
            var x = result.data.length;
            setCount(x);
        })
    },[]);
    
    var getResponse = (i) => {
        setText("");
        fetch(`https://reqres.in/api/users/${i+1}`)
        .then(results=>results.json())
        .then(result => {
            let name = result.data.first_name +" "+ result.data.last_name;
            let email = result.data.email;
            setName(name);
            setEmail(email); 
        })
    }
    let p = new Array(count).fill(0);
    return ( 
        <>
            <div className='topText'>{text}</div>
            <div className='card'>
                <div className='inner'>
                    <div><b>Name</b>: {name}</div>
                    <div><b>User Info</b>: {email}</div>
                </div>
                <div>
                    {
                        p.map((ele,val)=>{
                        return <button className='btn' onClick={() => getResponse(val)} key={val}>{val+1}</button>
                        })
                    }
                </div>
            </div>
        </>
    );
}
 
export default MainApp;
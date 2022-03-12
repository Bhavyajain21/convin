import React, { Component, useEffect } from 'react';
import { useState } from 'react';
const ReturnBtnCmp = ({count}) => {
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        const arr1 = [];
        for(let i=0;i<count;i++)
        {
            arr1.push(
                <button>{i+1}</button>
            )
        }
        setArr(arr1);
    },[]);
    let p = new Array(count).fill(0);
    return (
        <></>
    );
}
 
export default ReturnBtnCmp;
import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState('jayanth');
  const updateDetails = () => {
    setName('swetha');
  };

  //component did mount
  useEffect(()=>{
    console.log('mounting');
  },[])
  //component did update
  
  useEffect(()=>{
    console.log('didupdate');
  },[name])
  //component will unmount
  useEffect(()=>{
   
    return()=>{
      console.log('willunmount');
    }
  },[])

  return (
    <div>
      {console.log('html')}
      {name}
      <button onClick={updateDetails}>clickme</button>
    </div>
  );
}

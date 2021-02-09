import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../Assets/images/giving.svg';
import { Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Start() {
  let history = useHistory();

  return (
    <div className="">
     <h1> <Image src = {logo} roundedCircle/></h1> 

     <h2>BIENVENIDO</h2>
      <p>Ayudemos a miles ofreciendo tu razón como un momento para apoyar a quien más lo necesita.</p>
        
      <Button variant="primary" className='Home-btn' onClick= {() => { history.push('/signup') }}>signup</Button>
      <Button variant="primary"className='Home-btn' onClick= {() => { history.push('/login') }}>login</Button>
    </div>
  )
}

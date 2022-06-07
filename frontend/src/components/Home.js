import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <h1>Welcome to FlockOnce</h1>
        <button className='home-button'
         onClick={() => navigate('/get-appointment')}
        >Book an appointment</button>
    </div>
  )
}

import React from 'react';
import './HeroimgStyles.css';

import { Link } from "react-router-dom";
import IntroImg from '../assets/4.avif';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className='into-img' src={IntroImg}></img>
        </div>
        <div className='content'>
          <p>Hi, I am a Freelancer</p>
          <h1>Full Stack Developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contacts</Link>
          </div>
        </div>
        
    </div>
  )
}

export default Heroimg
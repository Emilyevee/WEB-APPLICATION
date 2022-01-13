import React from 'react'
import {Link} from 'react-router-dom';
import hpimg from '../assets/HOMEPAGEIMG.jpg';
import "..//styles/home.css";

function home() {
    return (
        <div className="home" style={ {backgroundImage:hpimg }}>
            <div className="title" 
            >
                <h1>  Budgetify </h1>
                <p>Here to help you fix your finaces </p>
                <Link to="/login"> 
                <button> Join Now</button>
                </Link>
            </div>
            
        </div>
    )
}

export default home

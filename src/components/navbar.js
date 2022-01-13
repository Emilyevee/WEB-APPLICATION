import React, {useState} from 'react'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css';

function navbar() {

    const [open, setopen] = useState(false)

    const togglenavbar =() => {
        setopen(!open);

    }




    return (
        <div className="navbar">
            <div className ="leftside" id={open ? "open": "close"}>
                <img src={logo}/>
                <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/accounts"> Account </Link>
                
                <Link to="/login"> Login </Link>
                </div>
            </div>
            <div className ="rightside">
                <Link to="/home"> Home </Link>
                <Link to="/accounts"> Account </Link>
                
                <Link to="/login"> Login </Link>
                <button onClick={togglenavbar}> 
                <ReorderIcon />  
                </button>
            </div>


            
        </div>
    )
}

export default navbar

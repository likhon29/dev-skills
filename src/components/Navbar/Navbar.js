import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay,faCode } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="title-name">
                
                <FontAwesomeIcon icon={faCode} />
                <FontAwesomeIcon style={{marginLeft:'5px'}}icon={faDisplay} />
                <FontAwesomeIcon  style={{marginLeft:'5px'}} icon={faCode} />
                <h2>Dev-Skills</h2>
            </div>
            <div className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to='/home'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
           </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="title-name">
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
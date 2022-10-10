import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="nav-container">
            <div className="title-name">
            <h2>Dev-Skills</h2>
            </div>
            <div className="nav-item">
            <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blogs</Link>
           </div>
        </nav>
    );
};

export default Navbar;
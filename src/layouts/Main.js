import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>Main Components</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
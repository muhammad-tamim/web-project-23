import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/components/structure/Navbar';
import Footer from '../shared/components/structure/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
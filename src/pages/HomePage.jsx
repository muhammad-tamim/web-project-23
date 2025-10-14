import React from 'react';
import Hero from '../shared/components/structure/Hero';
import Phones from '../features/phones/components/Phones/Phones';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Phones></Phones>
        </div>
    );
};

export default HomePage;
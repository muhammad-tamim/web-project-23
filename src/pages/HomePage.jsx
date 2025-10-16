import React from 'react';
import Hero from '../shared/components/structure/Hero';
import PhonesContainer from '../features/phones/components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const data = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <PhonesContainer phones={data}></PhonesContainer>
        </div>
    );
};

export default HomePage; 
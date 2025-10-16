import React from 'react';
import { Link, useRouteError } from 'react-router';
import Button from '../shared/components/ui/Button';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='py-24 text-center'>
            <h1 className='mb-8 text-7xl font-thin text-gray-900'>
                {error?.status}
            </h1>
            <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
                {error?.error?.message || 'Something Went Wrong!'}
            </p>
            <Link to='/'>
                <Button label='Go To Homepage' />
            </Link>
        </div>
    );
};

export default ErrorPage;
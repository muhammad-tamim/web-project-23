import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from 'react-icons/md'

const PhonesCard = () => {
    return (
        <div className='card bg-base-100  shadow-sm'>
            <figure>
                <img src="https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16-pro-max/-728x314/gsmarena_002.jpg" alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>iPhone 16 Pro Max</h2>
                <p>Top-tier iPhone with luxury build, class-leading video, and reliable battery life.</p>
                <div className='card-actions justify-end'>
                    <Link to={`/phone-details/1`}>
                        <button className='relative inline-block px-4 py-2 font-medium group cursor-pointer'>
                            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                            <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
                            <span className='relative text-black group-hover:text-white'>
                                View More
                            </span>
                        </button>
                    </Link>
                </div>
            </div>


            <div
                className='bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'
            >
                <MdDeleteForever
                    size={20}
                    className='text-gray-100 group-hover:text-gray-900'
                />
            </div>

        </div>
    );
};

export default PhonesCard;
import React, { useEffect, useState } from 'react';
import PhonesCard from '../components/PhonesCard/PhonesCard';
import { getCartToLocalStorage, removeCartToLocalStorage } from '../utils/utils';
import EmptyState from '../../../shared/components/ui/EmptyState';

const CartPage = () => {

    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(() => {
        const savedPhones = getCartToLocalStorage()
        setDisplayPhones(savedPhones)
    }, [])

    const handleDelete = id => {
        removeCartToLocalStorage(id)
        setDisplayPhones(getCartToLocalStorage())
    }


    if (displayPhones.length < 1) return <EmptyState />


    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {displayPhones.map(phone => (
                    <PhonesCard
                        key={phone.id}
                        phone={phone}
                        deletable={true}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartPage;
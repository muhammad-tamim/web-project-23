import React, { Children, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { getCartToLocalStorage } from '../features/phones/utils/utils';

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(getCartToLocalStorage())
    }, [])



    return <CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;
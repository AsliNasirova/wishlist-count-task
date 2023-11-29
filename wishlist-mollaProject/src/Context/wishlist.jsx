import React, { createContext, useContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();



const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist')? JSON.parse(localStorage.getItem('wishlist')) : []);

    useEffect(() => {
      localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }, [wishlist])
    

    const addToWishlist = (itemId) => {
        if (!wishlist.includes(itemId)) {
            setWishlist([...wishlist, itemId]);
        }
    };

    const removeFromWishlist = (itemId) => {
        setWishlist(wishlist.filter((id) => id !== itemId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};


export default WishlistProvider





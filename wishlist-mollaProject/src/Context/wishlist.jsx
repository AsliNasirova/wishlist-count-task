import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

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

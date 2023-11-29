import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlist'
import "./index.scss"

const Wishlist = () => {
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext)
  return (
    <div id='wishlist'>
        <span>Fav
      {wishlist && wishlist.map((product)=>{
        return(
            <div>
                <ul>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                    <li>{product.category}</li>
                    <button onClick={()=>removeFromWishlist(product)}>X</button>
                </ul>
            </div>
        )
      })}
      </span>
    </div>
  )
}

export default Wishlist

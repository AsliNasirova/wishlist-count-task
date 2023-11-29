import { useState } from 'react'
import './App.css'
import WishlistProvider from './Context/wishlist'
import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <WishlistProvider>
     <Products/>
    </WishlistProvider>
    </>
  )
}

export default App

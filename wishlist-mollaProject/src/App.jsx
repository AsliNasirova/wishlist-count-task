import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <WishlistProvider>
     <Products></Products>
    </WishlistProvider>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound"

function App() {

  return (
    
         <BrowserRouter>
           <Navbar />

          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/product/:productId" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFound />} />
            
          </Routes>
          
        </BrowserRouter>
    

    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="bg-logo">
      <NavBar />
      <ItemListContainer text="¡Bienvenidos a Triativ!" />
      </div>
      
    
  )
}

export default App

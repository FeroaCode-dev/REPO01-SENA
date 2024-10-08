import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Formulario } from './components/formulario'
import { Homme } from './components/Home'
import './App.css'


function App() {
  const [user , setUser] = useState([])

  return (
    <div className="App">
      {
        !user.length > 0
        ?<Formulario setUser={setUser}/> 
        :<Homme user={user} />
      }
      
      
    </div>
 
  )
}

export default App

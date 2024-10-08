import "./formulario.css"
import { useState } from "react"

export function Formulario({setUser}){
    const [nomUsuario, setNombUsuario]=useState("")
    const [contraseña, setContraseña]=useState("")
    const[error, setError]=useState(false)
   
    const handleSubmitValidar= (e) => {
        e.preventDefault()
        if(nomUsuario==""){
            setError(true)
            return
        }
        setError(false)
        setUser([nomUsuario])
    }
    
   return (
    <section>
        <h1>Login</h1>
        <form className="formulario" 
            onSubmit={handleSubmitValidar}
        
        >
            <input type="text"
                value={nomUsuario}
                onChange={e=>setNombUsuario(e.target.value)}              
            />
            <input type="password" 
                value={contraseña}
                onChange={e=>setContraseña(e.target.value)} 
            />
            <button className="button">Iniciar Sesion</button>
        </form>
        {error && <p> Complete sus datos</p> }
    </section>
   )
}
import "./Home.css"

export function Homme( {user} ){
    return(
        <header class="mb-auto bg-dark">
        <div class="navega">
          <h3 class="float-md-start mb-0 text-white">EV. GA7-220501096-AA4-EV03 - FRONTEND REACT</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link fw-bold py-1 px-0" href="/">Inicio</a>
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">0000</a>
            <a class="nav-link fw-bold py-1 px-0" href="/clientes/nuevo"></a>
          </nav>
        </div>
        <div>
            <h1>!! BIENVENIDO !!</h1>
            <h3>Usuario: {user} </h3>

        </div>

    </header>  
    )
} 
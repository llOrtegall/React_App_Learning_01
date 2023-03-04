import './App.css'

function App() {

  return (
    <div className='page'>

      <header>
        <h1>Bucador De Peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Matrix, Nemo..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>

    </div>
  )
}

export default App

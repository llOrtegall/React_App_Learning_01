import './App.css'

function App() {

return (
  <div className='page'>
    <header>
      <h1>Buscador De Peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix ...' />
        <button type='submit'>Buscar</button>
      </form>
    </header>
    <main>
      Aquí irán los resultados
    </main>
  </div>
  )
}
export default App
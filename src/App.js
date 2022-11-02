import './App.css'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <p className="nome-princ">EsTce</p>
        <input
          className="bttn-pesquisa"
          id="input"
          type="search"
          placeholder="Pesquisar"
          aria-live="polite"
        ></input>
      </main>
      <footer>
        <div className="footer-fim">
          Tribunal de Contas do Piauí 
          <br></br>
          Av. Pedro Freitas, 2100 - Centro
          Administrativo - CEP: 64018-900 - Teresina-PI 
          <br></br>
          <br></br>
          DTIF - Divisão de
          Desenvolvimento de Softwares© - 2022{' '}
        </div>
      </footer>
    </div>
  )
}

export default App

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="nome-princ"
        >EsTce</p>
        <div className="div-bttn">
          <input
            className="bttn-pesquisa"
            id="input"
            type="search"
            placeholder="Pesquise"
            aria-live="polite"
          ></input>
        </div>
      </header>
    </div>
  );
}

export default App;

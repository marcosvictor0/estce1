// import "./App.css";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {

//   return (
// <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="../public/index.html">Index</Link>
//           </li>
//           <li>
//             <Link to="../public/resultados.html">About</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/index.html" element={<About/>}>
//         </Route>
//         <Route path="/" element={<Home />}>
//         </Route>
//       </Routes>
//     </div>
//   </Router>

// function Home() {
//   return <h2>teste</h2>
// }

// function About() {
//   return <h2>About</h2>;
// }

//     <div className="App">
//       <main className="App-header">
//         <p className="nome-princ">EsTce</p>
//         <input
//           className="campo-pesquisa"
//           id="input"
//           type="search"
//           placeholder="Pesquisar"
//           aria-live="polite"
//         ></input>
//         <button className="btn-pesquisa">
//           <a className="btn-pesquisatext" href="index.html">Pesquisar no EsTce</a>
//         </button>
//       </main>
//       <footer>
//         <div className="footer-fim">
//           Tribunal de Contas do Piauí
//           <br></br>
//           Av. Pedro Freitas, 2100 - Centro Administrativo - CEP: 64018-900 -
//           Teresina-PI
//           <br></br>
//           <br></br>
//           DTIF - Divisão de Desenvolvimento de Softwares© - 2022{" "}
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="header">
        <Header />
        <BtnHeader />
        {/* <div className="div-buts">
          <button className="btn-html">
            <Link to="./index.js" className="">Pesquisar</Link>
          </button>
          <button className="btn-html">
            <Link to="./resultados.js" className="">Resultados</Link>
          </button>
          </div> */}
        <Routes>
          <Route path="./index.js" element={<Home />}>teste</Route>
          <Route path="../public/resultados.html" element={<Resultados />}>teste</Route>
        </Routes>
      </div>

      <div className="App">
        <main className="App-header">
          <p className="nome-princ">EsTce</p>
          <input
            className="campo-pesquisa"
            id="input"
            type="search"
            placeholder="Pesquisar"
            aria-live="polite"
          ></input>
          <button className="btn-pesquisa">
            <a className="btn-pesquisatext" href="index.html">
              Pesquisar no EsTce
            </a>
          </button>
        </main>
        <footer>
          <div className="footer-fim">
            Tribunal de Contas do Piauí
            <br></br>
            Av. Pedro Freitas, 2100 - Centro Administrativo - CEP: 64018-900 -
            Teresina-PI
            <br></br>
            <br></br>
            DTIF - Divisão de Desenvolvimento de Softwares© - 2022{" "}
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header class="header">
      <img src="./assets/logoTce.png" alt="" />
      {/* <div class="div-buts">
      <button class="btn-html">
        <img src="./assets/Search.png" alt=""/>
        <a href="./index.html">pesquisar</a>
      </button>
      <button class="btn-html">
        <img src="./assets/File.png" alt=""/>
        <a href="./resultados.html">resultados</a>
      </button>
    </div> */}
    </header>
  );
}

function BtnHeader() {
  return (
    <div className="div-buts">
      <button className="btn-html">
      <img src="./assets/Search.png" alt=""/>
        <Link to="./index.js" className="">
          Pesquisar
        </Link>
      </button>
      <button className="btn-html">
      <img src="./assets/File.png" alt=""/>
        <Link to="./resultados.js" className="">
          Resultados
        </Link>
      </button>
    </div>
  );
}

function Home() {
  return;
}

function Resultados() {
  return;
}

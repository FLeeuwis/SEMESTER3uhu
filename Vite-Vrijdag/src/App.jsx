import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="lato-regular">
      <header>
        <h1 id="nav-title">
          <a herf="/">SEMESTER 3</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 class="lato-bold">React Router DOM</h2>
        <p>
          Welkom op de website van semester 3 - Media Design in Tilburg. <br />
          We gaan deze 'template' pagina omzetten met React Router DOM, naar een
          website waarin we kunnen navigeren.
        </p>
        <h3 class="lato-light">Wat hebben we nodig?</h3>
        <ul>
          <li>
            React || <a herf="https://vitejs.dev/">Vite</a>
          </li>
          <li>Template pagina</li>
          <li>
            React Router DOM (
            <a href="https://reactrouter.com/en/main">React Router</a>)
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

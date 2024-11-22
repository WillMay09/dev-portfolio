import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./navbar";
import React from "react";
import "./App.css"
import {Body} from "./body"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <section className="body-components">
          <Body />
        </section>
        <footer></footer>
      </div>
    </>
  );
}

export default App;

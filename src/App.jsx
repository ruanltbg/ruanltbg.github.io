import React from "react";
import ParticlesBg from 'particles-bg';
import Hero from "./components/Hero";
import About from "./components/About";
import Social from "./components/Social";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Hero />
        <About />
        <Social />
      </main>

      <div className="particles-bg">
        <ParticlesBg color="#3b82f6" num={50} type="cobweb" bg={true} />
      </div>
    </div>
  );
}

export default App;

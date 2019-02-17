import React, { Component } from 'react';
import './App.css';
import About from "./components/about/About";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;

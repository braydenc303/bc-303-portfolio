import React, { Component } from 'react';
import './App.css';
import About from "./components/about/About";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;

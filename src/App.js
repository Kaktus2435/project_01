import './App.css';
import './components/header.css';
import './components/nav.css';
import './components/home.css';
import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
    </div>
  );
}

export default App;

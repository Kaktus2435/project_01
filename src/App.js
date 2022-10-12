import './App.css';
import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/prolfile/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;

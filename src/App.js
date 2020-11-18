import React from 'react';
import DressCards from './components/DressCards';
import Footer from './components/Footer';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import './style/app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <h1>Dresser</h1>
        <DressCards />
        <SwipeButtons />
      </div>
      <Footer />
    </div>
  );
}

export default App;

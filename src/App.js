import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import OrderContainer from './containers/OrderContainer';

function App() {
  return (
    <div style={{overflowX:'hidden'}}>
    <NavBar/>
    <Header/>
  <div>
    <OrderContainer 
    />
  </div>
  </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import io from 'socket.io-client';
import Home from './components/Home';
function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Sidebar from './features/Sidebar';
import Posts from './features/Posts'


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Posts />
    </div>
  );
}

export default App;

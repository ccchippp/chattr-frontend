import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Sidebar from './features/Sidebar';
import Posts from './features/Posts'


function App() {
  return (
    <div className="app">
      < BrowserRouter>
      < Switch>
      </Switch>
      </BrowserRouter>
      <Sidebar />
      <Posts />
    </div>
  );
}

export default App;

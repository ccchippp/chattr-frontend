import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import React from 'react'
import './App.css';
// import { useSelector } from 'react-redux'
// import { selectUser } from './features/userSlice'
// import Sidebar from './features/Sidebar';
// import Posts from './features/Posts';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/dashboard'} component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
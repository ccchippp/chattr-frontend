import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
// import Sidebar from './features/Sidebar';
// import Posts from './features/Posts'
import Home from './Home';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/dashboard'} component={Dashboard}/>
        </Switch>
      </BrowserRouter>

      {/* <Sidebar />
      <Posts /> */}
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function App() {
  // const user = useSelector(selectUser)
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

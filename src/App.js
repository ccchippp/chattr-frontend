import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then(res => {
        console.log('logged in?', res.data)
        if (
          res.data.logged_in &&
          this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: res.data.user
          });
        } else if (
          !res.data.logged_in &
          (this.state.loggedInStatus === 'LOGGED_IN')
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }

  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route 
            exact path={'/'} 
            render={props => (
              <Home {...props} 
              handleLogin={this.handleLogin}
              loggedInStatus={this.state.loggedInStatus}/>
            )}/>
            <Route 
            exact path={'/dashboard'}
            render={props => (
              <Dashboard {...props} 
              loggedInStatus={this.state.loggedInStatus}
              user={this.state.user}/>
            )}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


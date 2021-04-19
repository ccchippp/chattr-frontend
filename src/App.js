// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './Home';
// import Dashboard from './Dashboard';
import React, { useEffect } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import Sidebar from './features/Sidebar';
import Posts from './features/Posts';
import Registration from './auth/Registration';
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
            {user ? (
                <>
                    <Sidebar />
                    <Posts/>
                </>
            ) : (
                <Registration/>
            )}
    </div>
  );
}

export default App;
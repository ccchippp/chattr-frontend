import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
  const dispatch = useDispatch()

// useEffect(() => {
  
//   if (user) {
//     //user is logged in
//     dispatch(login({
//       username: currentUser.username,
//       email: currentUser.email,
//       password: currentUser.password,
//       password_confirmation: currentUser.password_confirmation
//     }))
//   } else {
//     // user is logged out
//   }
// }, [])

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
  // return (
  //   <div className="app">
  //     <BrowserRouter>
  //       <Switch>
  //         <Route exact path={'/'} component={Home}/>
  //         <Route exact path={'/dashboard'} component={Dashboard}/>
  //       </Switch>
  //     </BrowserRouter>
  //   </div>
  // );
  //   this.state = {
//     username: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//     registrationErrors: ''
// }
}

export default App;
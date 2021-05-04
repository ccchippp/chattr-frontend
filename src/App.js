import React, { useEffect } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import Sidebar from './features/Sidebar';
import Posts from './features/Posts';
import Registration from './auth/Registration';
import { login, logout } from './features/userSlice'
import { auth } from './firebase';
import ChatBar from './features/ChatBar'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // console.log('user is', authUser)
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        //logged out
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className='app'>
            {user ? (
                <>
                    <Sidebar/>
                    <Posts/>
                    {/* <ChatBar/> */}
                </>
            ) : (
                <Registration/>
            )}
    </div>
  );
}

export default App;
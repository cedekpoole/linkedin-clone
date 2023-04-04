import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }))
        // if user is logged in
      } else {
        // if user is logged out
        dispatch(logout())
      }

    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;

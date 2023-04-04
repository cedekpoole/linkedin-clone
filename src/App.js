import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)

  useEffect(() => {
    auth
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;

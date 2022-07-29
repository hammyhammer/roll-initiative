import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verify } from './services/users'
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verify();
      setCurrentUser(user)
    }
    getUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/board' element={<Home setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;

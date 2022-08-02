import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verify } from './services/users'
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import CharacterContainer from './containers/CharacterContainer/CharacterContainer';
import Register from './screens/Register/Register';
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
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
        <Route path='/home' element={<Home currentUser={currentUser} />} />
        <Route path="/combat/*" element={<CharacterContainer currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;

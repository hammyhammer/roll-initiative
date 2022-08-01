import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const logout = () => {
    localStorage.removeItem('authToken')
    props.setCurrentUser(null)
  }

  return (
    <div>
      <h3>Roll Initiative</h3>
      <Link to='/' onClick={logout}>logout</Link>
    </div>
  )
}

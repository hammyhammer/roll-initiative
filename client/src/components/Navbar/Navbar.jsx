import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const logout = () => {
    localStorage.removeItem('authToken')
    props.setCurrentUser(null)
  }

  return (
    <div>Navbar
      <Link to='/' onClick={logout}>logout</Link>

    </div>
  )
}

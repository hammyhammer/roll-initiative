import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(props) {

  const logout = () => {
    localStorage.removeItem('authToken')
    props.setCurrentUser(null)
  }

  return (
    <div>
      <header>Main Page</header>
      <Link to='/' onClick={logout}>logout</Link>
    </div>
  )
}

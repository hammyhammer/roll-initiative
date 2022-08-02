import { useState } from 'react'
import { registerUser } from '../../services/users'

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      register page
      <form >
        <input type="text" value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)} />
        <input type="text" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
        <button>Create Account</button>
      </form>
    </div>
  )
}

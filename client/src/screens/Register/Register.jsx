import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/users'

export default function Register(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = {
      email,
      password
    }
    const response = await registerUser(user);
    props.setCurrentUser(response)
    navigate('/characters')
  }
  return (
    <div>
      register page
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)} />
        <input type="text" value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
        <button>Create Account</button>
      </form>
    </div>
  )
}

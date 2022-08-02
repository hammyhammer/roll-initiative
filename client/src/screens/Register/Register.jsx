import { useState } from 'react'
import { registerUser } from '../../services/users'

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      register page
      <form >

      </form>
    </div>
  )
}

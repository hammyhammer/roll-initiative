import { useState } from 'react'
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import logincss from './Login.module.css';


export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    }

    const res = await loginUser(user)
    // props.setCurrentUser(res)
    navigate('/board')
  }


  return (
    <div className={logincss.whole}>
      <header>
        Roll Initative
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} placeholder='email' onChange={(event) => setEmail(event.target.value)} />
          <input type="text" value={password} placeholder='password' onChange={(event) => setPassword(event.target.value)} />
          <button>Login</button>
        </form>
      </div>
    </div>

  )
}

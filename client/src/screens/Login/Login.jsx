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
    props.setCurrentUser(res)
    navigate('/characters')
  }

  const registerPath = async (event) => {
    navigate('/register')
  }


  return (
    <div className={logincss.whole}>
      <header className={logincss.banner}>
        Roll Initative
      </header>
      <div className={logincss.form}>
        <form className={logincss.inputs} onSubmit={handleSubmit}>
          <input className={logincss.input_box} type="email" value={email} placeholder='email' onChange={(event) => setEmail(event.target.value)} />
          <input className={logincss.input_box} type="password" value={password} placeholder='password' onChange={(event) => setPassword(event.target.value)} />
          <button className={logincss.login_button}>Login</button>

        </form>

      </div>
      <div>
        <button onClick={registerPath}>Register</button>
      </div>
    </div>

  )
}

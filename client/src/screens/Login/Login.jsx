import { useState } from 'react'
import { loginUser } from '../../services/users';
import logincss from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password
    }

    const response = await loginUser(user)
    props.setCurrentUser(response)
    navigate('/board')
  }


  return (
    <body className={logincss.whole}>
      <div>
        Login
      </div>
    </body>

  )
}

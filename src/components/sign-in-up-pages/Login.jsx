import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import style from './form.module.css'
import Footer from './footer';


function Login() {

  const navigate = useNavigate()
  const [input, setInput] = useState({ email: '', password: '', })

  //to get value from local storage

  function handleLogin(e) {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      localStorage.setItem('loggedIn', true)

      alert('logged in successfully')
      navigate('/')

    } else {

      alert('invalid password or email')
    }

  }

  return (
    <div  className={style.mainform} >

      <form  className={style.form} onSubmit={handleLogin}>
        <TwitterIcon sx={{color:'rgb(44, 163, 237)'}} />
        <h3>Login</h3>
        <div>

          <input type='text' name='email' placeholder='email...' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><pre />

          <input type={'password'} name='password' placeholder='password...' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
        </div><br />

        <button >Login</button><br /><pre />
        <br />

        <h6>Don't have an account ?
          <Link to={'/signin'}>
            <u>Sign up here</u>
          </Link></h6>



      </form>





<Footer/>




    </div>
  )
}

export default Login

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import style from './form.module.css'
import Footer from './Footer'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material'


function Login() {

  const navigate = useNavigate()
  const [input, setInput] = useState({ email: '', password: '', })

  const googleAvatar = { backgroundColor: 'whitesmoke', color: 'black' }
  const appleAvatar = { backgroundColor: 'whitesmoke', color: 'black' }

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
    <>
      <div className={style.mainform} >


        <form className={style.form} onSubmit={handleLogin}>




          <TwitterIcon sx={{ color: 'rgb(44, 163, 237)' }} />
          <h2>Login to Twitter</h2>

          <div className={style.social} >
            <Stack   direction="column" spacing={2} align='center' width={"16rem"}>
              <Chip  avatar={<Avatar style={googleAvatar} ><GoogleIcon /></Avatar>} label="Sign in with Google" component="a" href="https//:google.com" variant="outlined" clickable />
              <Chip avatar={<Avatar style={appleAvatar}><AppleIcon /></Avatar>} label="Sign in with Apple" component="a" href="https//:apple.com" variant="outlined" clickable />
            </Stack>
          </div>
          <pre />


          <div>

            <input type='text' name='email' placeholder='email...' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><pre />

            <input type={'password'} name='password' placeholder='password...' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
          </div><br />

          <button>  Login</button>

          <br />

          <h6>Don't have an account ?
            <Link to={'/signin'}>
              <u> Sign up here</u>
            </Link></h6>


        </form>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Login

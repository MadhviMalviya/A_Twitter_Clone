import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import style  from './form.module.css'
import Footer from './Footer'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material'



function SignUp() {
    const navigate = useNavigate()
    const [input, setInput] = useState({ name: '', email: '', dob: '', password: '' })
    const [errors, setErrors] = useState({})
    const [isRegistered, setRegistered] = useState(false)



    const googleAvatar = {backgroundColor: 'white', color: 'black' }
    const appleAvatar = {backgroundColor: 'white', color: 'black'}

    function validationForm({ name, email, dob, password }) {

        let errors = {}

        if (!name) {
            errors.name = 'Name is required'
        } else if ((/[^a-zA-Z\s]/.test(name))) {
            errors.name = 'Name should not contain special characters'
        } if (!email) {
            errors.email = 'email is required'
        } else if (!/@/.test(email) || email.length < 12) {
            errors.email = 'should contain @ and at least 12 characters long'
        } if (!dob) {
            errors.dob = 'dob is required'
        } else {
            const currentDate = new Date()
            const selectedDate = new Date(dob)
            if (selectedDate >= currentDate) {
                errors.dob = 'Born first !'
            } else {
                const agediff = currentDate - selectedDate
                const ageDate = new Date(agediff)                           //utc:25/12/1990=> 1990
                const age = Math.abs(ageDate.getUTCFullYear() - 1970)     //1970:ref year in js ,ex:1990-1970=20 

                if (age < 12) {
                    errors.dob = 'Baby! Grow up first!'
                }
            }
        }
        if (!password) {
            errors.password = 'password is required!'
        } else if (password.length < 5) {
            errors.password = 'password should be 5 characters long!'
        }
        return errors
    }

    // to store in local storage 
    function handleSubmit(e) {
        e.preventDefault()
        const errors = validationForm(input)
        if (Object.keys(errors).length === 0) {
            const storedUser = localStorage.getItem('user')
            const existingUser = storedUser ? JSON.parse(storedUser) : null

            if (existingUser && existingUser.email === input.email) {
                alert('email is already registered!')
            } else {
                localStorage.setItem('user', JSON.stringify(input))
                alert('Registered successfully!')
                navigate('/login')
                setRegistered(true)
            }

        } else {
            setErrors(errors)
        }
    }

    return (
<>
        <div  className={style.mainform} >
            <form className={style.form}  onSubmit={handleSubmit} >
            <TwitterIcon  sx={{color:'rgb(44, 163, 237)'}}/>

<h2>Sign in to Twitter</h2>
<div className={style.social} >
        <Stack border={'blue'} direction="column" spacing={2} align='center'  width={"16rem"}>
          <Chip avatar={<Avatar style={googleAvatar} ><GoogleIcon/></Avatar>} label= "Sign in with Google" component="a" href="https//:google.com" variant="outlined" clickable/>
          <Chip avatar={<Avatar style={appleAvatar}><AppleIcon/></Avatar>} label="Sign in with Apple" component="a" href="https//:apple.com" variant="outlined" clickable />
        </Stack>
        </div>
        <pre/>
                <input type='text' name='email' placeholder='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.email && <p >{errors.email}</p>}<pre/>
                <input type='text' name='name' placeholder='name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.name && <p>{errors.name}</p>}<pre/>
                <input type='text' name='password' placeholder='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.password && <p  >{errors.password}</p>}<pre/>
                <input type={'date'} name='dob' value={input.dob} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input>
                {errors.dob && <p >{errors.dob}</p>}<pre/>
                <br/>
                <button>Sign up</button>
                {/* <Button  variant="contained" sx={{ borderRadius: "50px", backgroundColor: " rgb(44, 163, 237)", color: "white",textTransform:'none',width:'15rem' }} >Sign up</Button> */}
                <h6>Already have an account?
        <Link to={'/login'}>
          <u> Login here</u>
        </Link></h6>

            </form>
            </div>
            <div>
            <Footer/>
            </div>
        
        </>
    )
}

export default SignUp

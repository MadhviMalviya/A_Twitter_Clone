import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import style  from './form.module.css'

function SignIn() {
    const navigate = useNavigate()
    const [input, setInput] = useState({ name: '', email: '', dob: '', password: '' })
    const [errors, setErrors] = useState({})
    const [isRegistered, setRegistered] = useState(false)


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
                errors.dob = 'Invalid date of birth'
            } else {
                const agediff = currentDate - selectedDate
                const ageDate = new Date(agediff)                           //utc:25/12/1990=> 1990
                const age = Math.abs(ageDate.getUTCFullYear() - 1970)     //1970:ref year in js ,ex:1990-1970=20 

                if (age < 12) {
                    errors.dob = 'Baby!Grow first!'
                }
            }
        }
        if (!password) {
            errors.password = 'password is required'
        } else if (password.length < 5) {
            errors.password = 'password should be 5 characters long'
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
                alert('email is already registered')
            } else {
                localStorage.setItem('user', JSON.stringify(input))
                alert('Registered successfully')
                navigate('/login')
                setRegistered(true)
            }

        } else {
            setErrors(errors)
        }
    }

    return (

        <div  className={style.mainform} >
            <form className={style.form}  onSubmit={handleSubmit} >
            <TwitterIcon  sx={{color:'rgb(44, 163, 237)'}}/>

<h3>Sign up</h3>
                <input type='text' name='email' placeholder='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input><br/>
                {errors.email && <h5 >{errors.email}</h5>}<br/>
                <input type='text' name='name' placeholder='name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input><br/>
                {errors.name && <h5>{errors.name}</h5>}<br/>
                <input type='text' name='password' placeholder='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input><br/>
                {errors.password && <h5  >{errors.password}</h5>}<br/>
                <input type={'date'} name='dob' value={input.dob} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} ></input><br/>
                {errors.dob && <h5 >{errors.dob}</h5>}<br/>
                <button  >submit</button><br/>
                <h6>Already have an account?
        <Link to={'/login'}>
          <u>Login here</u>
        </Link></h6>

            </form>
        </div>
    )
}

export default SignIn

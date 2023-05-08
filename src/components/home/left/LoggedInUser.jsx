import { jsx } from '@emotion/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function LoggedInUser() {
    const navigate=useNavigate()
    const loggedInUser=JSON.parse(localStorage.getItem('user'))

function handleLogout(){
    localStorage.removeItem('loggedIn')
    navigate('/login')
}

  return (
    <div>
      <p>{loggedInUser.name}</p>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default LoggedInUser

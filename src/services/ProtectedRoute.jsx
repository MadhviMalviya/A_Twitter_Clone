import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {

    const auth = localStorage.getItem('loggedIn')
    return  auth ? <Outlet /> : <Navigate to={'/login'} />

}

export default ProtectedRoute

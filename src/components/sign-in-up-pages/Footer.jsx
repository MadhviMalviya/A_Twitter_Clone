
import React from 'react'
import style from './footer.module.css'
import { Button } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (

        <div className={style.footer} >

            <div className={style.footpara}>
                <h2>Don’t miss what’s happening</h2>
                <p>People on Twitter are the first to know.</p>
            </div>




            <div className={style.footbtn}>
                <Button onClick={()=>{navigate('/signin')}} variant="outlined" sx={{ borderRadius: "50px", color: "black",border:'white' ,color: "white"}} >Sign up</Button>
                <Button  onClick={()=>{navigate('/login')}} variant="contained" sx={{ borderRadius: "50px", backgroundColor: "whitesmoke", color: "black" }} >Log in</Button>
            </div>



        </div>
    )
}

export default Footer












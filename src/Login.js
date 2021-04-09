
import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo"
                 src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>
        </div>
    )
}

export default Login

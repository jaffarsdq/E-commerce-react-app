import React, { useState } from 'react'

import './auth.css'
import Auth from '../../components/auth/Auth'
import { Link } from 'react-router-dom'
import { signup } from '../../apis/fakeStoreApi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const navigate = useNavigate();

    const [resetForm, setResetForm] = useState(false);

  return (
    <>
        {/* <!-- welcome --> */}
    <div className="container my-4">
        <div className="main row">
            <div className="display-1 welcome col text-center">
                Welcome to <strong>S</strong>hoppy
            </div>
        </div>
    </div>

    {/* <!-- login card --> */}
    <div id="loginPage">

        <div className="container col-11 col-sm-6 col-xl-4">
            <div className="login-wrapper" id="loginForm">
                <div className="sign-up text-center">
                    <h4>Signup</h4>
                </div>
                <Auth 
                    onSubmit={ async (authAgrs) => {
                        try {
                            await axios.post(signup(),{
                                username: authAgrs.username,
                                email: authAgrs.email,
                                password: authAgrs.password
                            })
                            navigate('/login')           
                        } catch (error) {
                            console.log(error)
                            setResetForm(!resetForm)
                        }
                    }}
                    resetForm={resetForm}
                />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link to="/Login">
                       Already have an Account? Login Here
                    </Link>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Signup
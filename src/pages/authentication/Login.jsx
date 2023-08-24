import React, {useRef} from 'react'

import './auth.css'
import Auth from '../../components/auth/Auth'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import { signIn } from '../../apis/fakeStoreApi';
import { useCookies } from 'react-cookie';

function Login() {

    const [token, setToken] = useCookies(['jwt-token'])
    const navigate = useNavigate();

    const authRef = useRef(null);
    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(signIn(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            }); 
            console.log(response);
            setToken('jwt-token', response.data.token);
            navigate('/');
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
        }
    }

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
                    <h4>Login</h4>
                </div>
                <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link to="/signup">
                        Don't have an Account? Signup Here
                    </Link>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Login
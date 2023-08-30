import React, {useContext, useRef, useEffect} from 'react'

import './auth.css'
import Auth from '../../components/auth/Auth'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';
import { signIn } from '../../apis/fakeStoreApi';
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import UserContext from '../../context/UserContext';


function Login() {

    const [token, setToken] = useCookies(['jwt-token']);
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const authRef = useRef(null);

    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(signIn(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            }, {withCredentials: true}); 
            const tokenDetails = jwt_decode(response.data.token);
            setUser({username: tokenDetails.user, id: tokenDetails.id});
            setToken('jwt-token', response.data.token, {httpOnly:true});
            navigate('/');
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
        }
    }

    useEffect(() => {
        
    },[authRef])

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
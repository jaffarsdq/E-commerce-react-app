import React from 'react'

//css import
import './login.css'

function Login() {
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
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Username" id="loginUsername"/>
                </div>
                <div className="input-group">
                    <input type="password" className="form-control" placeholder="Password" id="loginPassword"/>
                </div>
                <div className="input-group">
                    <button className="form-control btn btn-primary">Log In As User</button>
                </div>
                <div className="signup-btn text-center" id="showSignupBtn">Don't have an Account? Sign Up Here</div>
                
            </div>
        </div>

    </div>
    </>
  )
}

export default Login
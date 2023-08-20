import React, { useEffect, useState } from 'react'

function Auth({onSubmit, resetForm}) {

    const [formDetails, setFormDetails] = useState({
        username: '',
        email: '', 
        password: '',
        isLoading: false,
    })

  function updateUsername(UpdatedUsername) {
    setFormDetails({...formDetails, username: UpdatedUsername})
  }

  function updateEmail(updatedEmail) {
    setFormDetails({...formDetails, email: updatedEmail})
  }

  function updatePassword(updatedPassword) {
    setFormDetails({...formDetails, password: updatedPassword})
  }

  function onFormSubmit() {
    onSubmit(formDetails)
    setFormDetails({...formDetails, isLoading: true})
  }

  function reset() {
      setFormDetails(
          {
              username: '',
              email: '', 
              password: '',
              isLoading: false,
          }
      )
  }

  useEffect(() => {
    reset()
  },[resetForm])

  return (
    <>
        <div className="input-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username"
                value={formDetails.username} 
                id="loginUsername"  
                onChange={(e)=> updateUsername(e.target.value)}
            />
        </div>
        <div className="input-group">
            <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={formDetails.email}
                id="loginEmail" 
                onChange={(e)=> updateEmail(e.target.value)}
            />
        </div>
        <div className="input-group">
            <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={formDetails.password}
                id="loginPassword" 
                onChange={(e)=> updatePassword(e.target.value)}
            />
        </div>
        <div className="input-group">
            <button className="form-control btn btn-primary" 
                    onClick={() => onFormSubmit(formDetails)} 
                    type="button"
                    disabled={formDetails.isLoading}>
                <span className={
                        `spinner-grow 
                        spinner-grow-sm
                        ${(formDetails.isLoading)? '' : 'd-none'}`
                    }
                    aria-hidden="false">
                </span>
                <span role="status"> 
                    {(formDetails.isLoading)? ' Loading...' : 'Submit'}
                </span>
            </button>
        </div>
    </>
  )
}

export default Auth
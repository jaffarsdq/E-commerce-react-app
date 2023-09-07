import React, { useEffect, useState, useImperativeHandle} from 'react'
import { useLocation } from 'react-router-dom'

function Auth({onSubmit}, ref) {
    const location = useLocation();

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
      setFormDetails({...formDetails, isLoading: true})
      onSubmit(formDetails, resetForm);
  }

  function resetForm() {
    setFormDetails({ username: '',
    email: '', 
    password: '',
    isLoading: false,});
  }


  useImperativeHandle(ref, () => {
    return {
        resetFormData: resetForm
    }
    }, []);

    useEffect(() => {
        setFormDetails({email: '', password: '', username: '', isLoading: false});
    }, [])

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
        <div className={`${(location.pathname === '/signup') ? 'input-group' : 'd-none'}`}>
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
            <button className="form-control btn btn-dark" 
                    onClick={onFormSubmit} 
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

export default React.forwardRef(Auth);
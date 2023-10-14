import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { useLocation } from 'react-router-dom';

function Auth({ onSubmit }, ref) {
  const location = useLocation();

  const isSignup = location.pathname === '/signup';

  const [formDetails, setFormDetails] = useState({
    username: '',
    email: '',
    password: '',
    isLoading: false,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Username validation: lowercase and required
    if (!formDetails.username) {
      errors.username = 'Username is required';
    } else if (!/^[a-z]+$/.test(formDetails.username)) {
      errors.username = 'Username must be in lowercase';
    }

    if (isSignup) {
      // Email validation: basic pattern
      if (!formDetails.email) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formDetails.email)) {
        errors.email = 'Email is not valid';
      }
    }

    // Password validation: at least 6 characters and one special character
    if (!formDetails.password) {
      errors.password = 'Password is required';
    } else if (formDetails.password.length < 6 || !/[!@#$%^&*]/.test(formDetails.password)) {
      errors.password = 'Password must be at least 6 characters with one special character';
    }

    setValidationErrors(errors);

    // Return true if there are no errors, otherwise false
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form details
    setFormDetails({ ...formDetails, [name]: value });

    // Validate the specific input
    const errors = { ...validationErrors };
    if (name === 'username') {
      if (!value) {
        errors.username = 'Username is required';
      } else if (!/^[a-z]+$/.test(value)) {
        errors.username = 'Username must be in lowercase';
      } else {
        delete errors.username;
      }
    } else if (name === 'email' && isSignup) {
      if (!value) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        errors.email = 'Email is not valid';
      } else {
        delete errors.email;
      }
    } else if (name === 'password') {
      if (!value) {
        errors.password = 'Password is required';
      } else if (value.length < 6 || !/[!@#$%^&*]/.test(value)) {
        errors.password = 'Password must be at least 6 characters with one special character';
      } else {
        delete errors.password;
      }
    }

    setValidationErrors(errors);
  };


  const onFormSubmit = () => {
    if (validateForm()) {
      setFormDetails({ ...formDetails, isLoading: true });
      onSubmit(formDetails, resetForm);
    }
  };

  const resetForm = () => {
    setFormDetails({
      username: '',
      email: '',
      password: '',
      isLoading: false,
    });
    setValidationErrors({});
  };

  useImperativeHandle(ref, () => ({
    resetFormData: resetForm,
  }), []);

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <>
        {validationErrors.username && <div className="error text-danger">{validationErrors.username}</div>}
        <div className="input-group">
            <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={formDetails.username}
            onChange={handleInputChange}
            />
        </div>

        {validationErrors.email && <div className="error text-danger">{validationErrors.email}</div>}
        {location.pathname === '/signup' && (
            <div className="input-group">
            <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formDetails.email}
                onChange={handleInputChange}
            />
            </div>
        )}

        {validationErrors.password && <div className="error text-danger">{validationErrors.password}</div>}
        <div className="input-group">
            <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formDetails.password}
            onChange={handleInputChange}
            />
        </div>

      <div className="input-group">
        <button
          className="form-control btn btn-dark"
          onClick={onFormSubmit}
          type="button"
          disabled={formDetails.isLoading}>
          <span
            className={`spinner-grow spinner-grow-sm ${formDetails.isLoading ? '' : 'd-none'}`}
            aria-hidden="false"
          />
          <span role="status">
            {formDetails.isLoading ? 'Loading...' : 'Submit'}
          </span>
        </button>
      </div>
      
    </>
  );
}

export default forwardRef(Auth);

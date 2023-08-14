import React from 'react'

//css imports
import './Header.css'

function Header() {
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand nav-brand" href="#"> <strong>S</strong>hoppy</a> 
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                        <a className="nav-link cart" aria-current="page" href="#"><i className="bi bi-cart"></i> Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active fw-bold" href="#">Hi User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'

//css imports
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to={'/'} className="navbar-brand nav-brand" href="#"> <strong>S</strong>hoppy</Link> 
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto text-center fw-semibold">
                        <li className="nav-item">
                            <Link to={'./cart'} className="nav-link cart" aria-current="page" href="#"><i class="bi bi-cart3"></i> Cart</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link to={"/Login"} className="dropdown-item text-danger">
                                    Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Username <i class="bi bi-person-circle"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
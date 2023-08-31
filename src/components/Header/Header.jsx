//library import
import React, {useContext, useEffect} from 'react'

//css import
import './Header.css'
//library imports
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';
//context import
import UserContext from '../../context/UserContext';
import CartContext from '../../context/CartContext';

function Header() {

    const [token, setToken, removeToken] = useCookies(['jwt-token']);
    const {user, setUser} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);

    function logout() {
        removeToken('jwt-token', {httpOnly: true});
        axios.get(`${import.meta.env.VITE_BASE_URL}/logout`, {withCredentials: true});
        setUser(null);
        setCart(null);
      }
    
      useEffect(() => {
      }, [token]);

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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link to={`./cart/${user && user.id}`} className="nav-link cart position-relative" aria-current="page" href="#"><i className="bi bi-cart3"></i> Cart
                                        <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart && cart.products && `(${cart.products.length})`}
                                        </span>
                                    </Link>
                                </li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="dropdown-item text-danger">
                                    {token['jwt-token'] ? <Link onClick={() => {
                                       logout();
                                    }} to="/Login" className='text-danger text-decoration-none'>Logout</Link> : <Link className='text-success text-decoration-none' to="/login">Login</Link>}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {user && <a className="nav-link text-capitalize active" href="#">{user.username}</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
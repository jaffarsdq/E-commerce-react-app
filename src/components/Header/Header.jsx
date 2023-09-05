//library import
import {useContext, useEffect} from 'react'

import logo from '/logo.svg'

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
                <Link to={'/'} className="navbar-brand nav-brand" href="#"><img className='logo' src={logo} alt="logo" width={40} height={40} /></Link> 
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto text-center fw-semibold">
                        
                        <li className="m-auto">
                            {user && <div className="text-capitalize">{user.username}</div>}
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </a>      
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <Link to={`./cart/${user && user.id}`} className="nav-link cart position-relative text-center" aria-current="page" href="#"><i className="bi bi-bag"></i> Cart
                                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart && cart.products && `${cart.products.length}`}
                                    </span>
                                </Link>
                            </li>
                            
                            
                                {token['jwt-token'] ? <Link onClick={() => {
                                    logout();
                                }} to="/Login" className='dropdown-item text-center text-danger text-decoration-none'>Logout</Link> : <Link className='dropdown-item text-center text-success text-decoration-none' to="/login">Login</Link>}
                            
                        </ul>
                    </li>  
                            
                       
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
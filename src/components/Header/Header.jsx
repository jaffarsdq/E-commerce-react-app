//library import
import {useContext, useEffect, useState} from 'react'

import logo from '/logo.svg'
import avatar from '/avatar.png'

//css import
import './Header.css'
//library imports
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';
//context import
import UserContext from '../../context/UserContext';
import CartContext from '../../context/CartContext';
import toast from 'react-hot-toast'

function Header() {
    
    // eslint-disable-next-line no-unused-vars
    const [token, setToken, removeToken] = useCookies(['jwt-token']);
    const {user, setUser} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);
    const [scroll, setScroll] = useState(false);

    // function checkScrollPosition() {
    //     const scrollY = window.scrollY;
      
    //     if (scrollY > 80) {
    //       setScroll(true);
    //     } else {
    //         setScroll(false);
    //     }
    //   }

    function logout() {
        removeToken('jwt-token', {httpOnly: true});
        axios.get(`${import.meta.env.VITE_BASE_URL}/logout`, {withCredentials: true});
        setUser(null);
        setCart(null);
        toast.success('Logged out!')
    }

    useEffect(() => {
    // window.addEventListener('scroll', checkScrollPosition);
    }, [token, user]);

  return (
    <div className="header position-relative">
        <nav className={` ${(scroll) ? 'navbar navbar-expand-lg fixed-top shadow-sm' : 'navbar navbar-expand-lg'}`}>
            <div className="container">
                <Link 
                    to={'/'} 
                    className="navbar-brand nav-brand" 
                    href="#">
                        <img className='logo' src={logo} alt="logo" width={40} height={40} />
                </Link> 
    
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav ms-auto text-center fw-semibold">
                        
                        <li className="m-auto">
                            {user && 
                                <div className="text-capitalize user-name">
                                    <img className='mb-1' src={avatar} alt="" width={16} height={16}/> {user.username}
                                </div>
                            }
                        </li>

                        {user && <Link 
                            to={`./cart/${user && user.id}`} 
                            className="mx-3 text-dark text-decoration-none">

                            <li  
                                className="nav-link cart position-relative text-center" 
                                aria-current="page" 
                                href="#">
                                    <i className="bi bi-bag"></i> Cart
                                    <span 
                                        className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart && cart.products && `${cart.products.length}`}
                                    </span>
                            </li>
                        </Link>}
                        
                        {user ? 
                            <Link 
                                onClick={() => {logout()}} 
                                to="/Login" 
                                className='my-auto mx-1text-center text-danger text-decoration-none'>
                                    Logout
                            </Link> :
                            <Link 
                                className='my-auto mx-1text-center text-success text-decoration-none' 
                                to="/login">
                                    Login
                            </Link>
                        }                
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
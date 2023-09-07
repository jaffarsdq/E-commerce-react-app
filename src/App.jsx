//components import
import Header from './components/Header/Header'
//pages import
import MainRoutes from './routes/MainRoutes'
//contextImport
import UserContext from './context/UserContext.js'
import SearchContext from './context/SearchContext'
import CartContext from './context/CartContext'
//library imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import jwt_decode from "jwt-decode";
import { fetchUserCart } from './helper/fetchUserCartHelper'


function App() {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [token, setToken] = useCookies(['jwt-token']);

   async function accessToken() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/accesstoken`, {withCredentials: true})
        setToken('jwt-token', res.data.token, {httpOnly: true});
        const tokenDetails = jwt_decode(res.data.token);
        setUser({username: tokenDetails.user, id: tokenDetails.id});
      } catch (error) {
        console.log('error')
      }
  }

  async function load() {
    if(!user) {
      await accessToken();
    }

    if(user) {
      await fetchUserCart(user.id, setCart);
    }
  }

  useEffect(() => {
    load();
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <CartContext.Provider value={{cart, setCart}}>
          <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header/>
            <MainRoutes />
          </SearchContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App

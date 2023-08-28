//css import
import './App.css'
//components import
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
//pages import
import MainRoutes from './routes/MainRoutes'
//contextImport
import userContext from './context/UserContext.js'
//library imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import jwt_decode from "jwt-decode";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useCookies(['jwt-token']);

  function accessToken() {
    axios.get(`${import.meta.env.VITE_BASE_URL}/accesstoken`, {withCredentials: true})
    .then((res) => {
      setToken('jwt-token', res.data.token, {httpOnly: true});
      const tokenDetails = jwt_decode(res.data.token);
      setUser({username: tokenDetails.user, id: tokenDetails.id});
    });
  }

  useEffect(() => {
    accessToken();
  }, [])

  return (
    <>
      <userContext.Provider value={{user, setUser}}>
      <Header/>
      <MainRoutes />
      <Footer/>
      </userContext.Provider>
    </>
  )
}

export default App

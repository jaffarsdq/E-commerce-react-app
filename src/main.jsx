import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider defaultSetCookies={{ path: '/' }} />
  <App />
  <Toaster />
  <CookiesProvider/>
  </BrowserRouter>
)

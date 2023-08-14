import './App.css'

//components import
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

//pages import
import Home from './pages/home/home'


function App() {
  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}

export default App

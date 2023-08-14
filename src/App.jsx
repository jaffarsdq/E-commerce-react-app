import './App.css'

//components import
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

//pages import
import MainRoutes from './routes/MainRoutes'


function App() {
  return (
    <>
      <Header/>
      <MainRoutes />
      <Footer/>
    </>
  )
}

export default App

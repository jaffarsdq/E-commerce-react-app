//css imports
import './Footer.css'
function Footer() {

  return (
    <footer className={'footer-section'}>
        <div className='copyrights'>
          &#169; Jaffar Sadhiq
        </div>
        <div className='social'>
          <a className='github link' target='_blank' href='https://github.com/jaffarsdq/E-commerce-react-app.git'>
            <i className='bi bi-github'></i>
          </a>
          <a className='linkedIn link' target='_blank' href='https://www.linkedin.com/in/jaffar-sadhiq/'>
            <i className='bi bi-linkedin'></i>
          </a>
        </div>
          <a className='mail link' target='_blank' href='mailto:er.jaffarsdq@gmail.com'>
            <i className='bi bi-envelope-at'></i> er.jaffarsdq@gmail.com
          </a>
      </footer>
  )
}

export default Footer
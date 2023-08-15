import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

//css imports
import './Footer.css'
function Footer() {

  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      // Check if the document's height is greater than the viewport's height
      setIsScrollbarVisible(document.body.scrollHeight > window.innerHeight);
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  return (
    <footer className={`footer-section mt-2 ${isScrollbarVisible ? '' : 'fixed-bottom'}`}>
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
import logo from '../../assets/images/logo.svg'
import downArrow from '../../assets/icons/icon-arrow-light.svg'
import './nav.styles.css'

function Nav() {
  return (
    <div className='navbar-container'>
      <img src={logo} alt='Logo' />
      <nav className='links'>
        <div className='link-container'>
          <a href='#' className='link'>
            Product
          </a>
          <img src={downArrow} alt='' />
        </div>
        <div className='link-container'>
          <a href='#' className='link'>
            Company
          </a>
          <img src={downArrow} alt='' />
        </div>
        <div className='link-container'>
          <a href='#' className='link'>
            Contact
          </a>
          <img src={downArrow} alt='' />
        </div>
      </nav>
      <div className='login-container'>
        <a href='#'>Login</a>
        <button className='btn signUp'>Sign Up</button>
      </div>
    </div>
  )
}

export default Nav
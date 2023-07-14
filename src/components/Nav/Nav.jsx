import logo from '../../assets/images/logo.svg'
import downArrow from '../../assets/icons/icon-arrow-light.svg'
import './nav.styles.css'

function Nav() {
  return (
    <div className='navbar-container'>
      <img src={logo} alt='Logo' />
      <nav role='navigation' className='links'>
        <ul className='links-container'>
          <li className='link-menu'>
            <a href='#'>Product</a>
            <img src={downArrow} alt='' />
            <ul className='dropdown'>
              <li>
                <a href='#'>Overview</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>MarketPlace</a>
              </li>
            </ul>
          </li>
          <li className='link-menu'>
            <a href='#'>Company</a>
            <img src={downArrow} alt='' />
            <ul className='dropdown'>
              <li>
                <a href='#'>Overview</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>MarketPlace</a>
              </li>
            </ul>
          </li>
          <li className='link-menu'>
            <a href='#'>Contact</a>
            <img src={downArrow} alt='' />
            <ul className='dropdown'>
              <li>
                <a href='#'>Overview</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>MarketPlace</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className='login-container'>
        <a href='#'>Login</a>
        <button className='btn signUp'>Sign Up</button>
      </div>
    </div>
  )
}

export default Nav

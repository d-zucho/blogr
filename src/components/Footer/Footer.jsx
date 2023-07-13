import logo from '../../assets/images/logo.svg'

import './footer.styles.css'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='col logo-container'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='col'>
          <h2>Product</h2>
          <div className='col-details'>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Marketplace</p>
            <p>Features</p>
            <p>Integrations</p>
          </div>
        </div>
        <div className='col'>
          <h2>Company</h2>
          <div className='col-details'>
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
        </div>
        <div className='col'>
          <h2>Connect</h2>
          <div className='col-details'>
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import Nav from '../Nav/Nav'
import './header.styles.css'

function Header() {
  return (
    <div className='header-container'>
      <header>
        <Nav />
        <div className='hero-cta'>
          <div className='hero-text'>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
          </div>
          <div className='hero-btns'>
            <button className='btn start-btn'>Start for Free</button>
            <button className='btn learn-btn'>Learn More</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

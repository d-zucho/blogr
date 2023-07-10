import InfoImg from '../../assets/images/illustration-phones.svg'
import BgPattern from '../../assets/images/bg-pattern-circles.svg'

import './info.styles.css'

function Info() {
  return (
    <section className='info'>
      <div className='images'>
        <img className='background' src={BgPattern} alt='circle' />
        <img className='phones' src={InfoImg} alt='phones' />
      </div>
      <div className='info-copy'>
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  )
}

export default Info

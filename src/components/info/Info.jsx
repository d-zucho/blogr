import InfoImg from '../../assets/images/illustration-phones.svg'
import BgPattern from '../../assets/images/bg-pattern-circles.svg'

import './info.styles.css'

function Info() {
  return (
    <section className='info'>
      {/* <img className='background' src={BgPattern} alt='circle' /> */}
      <div className='circle' />
      <div className='content'>
        <img className='phones' src={InfoImg} alt='phones' />
        <div className='info-copy'>
          <h2 className='info-title'>State of the Art Infrastructure</h2>
          <p className='info-body'>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info

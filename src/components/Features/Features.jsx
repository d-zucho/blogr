import featuresBG from '../../assets/images/illustration-editor-desktop.svg'
import './features.styles.css'

function Features() {
  return (
    <section className='features'>
      {/* <img src={featuresBG} className='features-img' alt='Our Editor' /> */}

      <h2 className='features-header'>Designed for the future</h2>
      <div className='features-content'>
        <div className='features-main'>
          <div className='features-body'>
            <div className='features-info'>
              <h2>Introducing and extensible editor</h2>
              <p className='feature-desc'>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className='features-info'>
              <h2>Robust content management</h2>
              <p className='feature-desc'>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-img'>
          <img src={featuresBG} alt='feature background' />
        </div>
      </div>
    </section>
  )
}

export default Features

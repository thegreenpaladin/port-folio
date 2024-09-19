import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Get in touch</h3>
            <p>
              If you have any questions or would like to work together, please
              feel free to reach out to me.
            </p>
            <a href="mailto:ahsanmuhammed45@gmail.com">Email me</a>
          </div>
          <div className="footer-column">
            <h3>Follow me</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/calledahsan/">
                Instagram
              </a>
              <a href="https://www.facebook.com/calledahsan">Facebook</a>
              <a href="https://www.linkedin.com/in/calledahsan/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
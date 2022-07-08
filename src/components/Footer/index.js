import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <button type="button" className="icon-button">
        <FaGoogle />
      </button>
      <button type="button" className="icon-button">
        <FaTwitter />
      </button>
      <button type="button" className="icon-button">
        <FaInstagram />
      </button>
      <button type="button" className="icon-button">
        <FaYoutube />
      </button>
    </div>
    <p className="contact-us-footer">Contact us </p>
  </>
)
export default Footer

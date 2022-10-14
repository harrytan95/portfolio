import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoH from '../../assets/images/logo-h.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faSkype,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoH} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Harry Tan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/" end>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/harrytan95/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="skype:live:harrytan_1?chat">
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://telegram.me/HarryStockInvest"
        >
          <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar

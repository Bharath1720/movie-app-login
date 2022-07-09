import './index.css'
import {Link} from 'react-router-dom'
import {MdMenuOpen} from 'react-icons/md'
import {HiOutlineSearch} from 'react-icons/hi'

const Header = props => {
  const {sample} = props
  return (
    <div className="navbar-bg-color">
      <Link to="/">
        <img
          className="header-logo"
          src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656594712/Group_7399_wrvd0n.png"
          alt="website logo"
        />
      </Link>

      <ul className="header-logo-links-container">
        <Link to="/">
          <li className="header-logo-each-link">Home</li>
        </Link>
        <Link to="/popular">
          <li className="header-logo-each-link">Popular</li>
        </Link>
      </ul>
      <div className="actions-container">
        <button className="search-btn" type="button">
          <HiOutlineSearch size={20} color="white" testid="searchButton" />
        </button>
        <img
          className="profile-image"
          src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656598609/Mask_Group_yc5cws.png"
          alt="profile"
        />
        <button className="menu-btn" type="button">
          <MdMenuOpen
            color="#ffffff"
            size={25}
            className="menu-icon"
            //   onClick={this.onClickMenu}
          />
        </button>
      </div>
    </div>
  )
}
export default Header

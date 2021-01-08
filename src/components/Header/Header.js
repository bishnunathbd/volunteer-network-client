import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';
import './Header.css';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className='header'>
      <nav className='nav'>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/donation'>Donation</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            {
              loggedInUser.email ? <button onClick={()=>setLoggedInUser({})}>Sign out</button>
                : <button><Link to='/login'>Register</Link></button>
            }
          </li>
          <li>
            <button>Admin</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
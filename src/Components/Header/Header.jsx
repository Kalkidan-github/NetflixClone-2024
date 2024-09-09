import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            {/* <li> Netflix</li> */}
            <a href="">
              {" "}
              <img
                src="https://pngimg.com/uploads/netflix/netflix_PNG1.png"
                alt=""
              />
            </a>
            <li> Home </li>
            <li> TV Shows </li>
            <li> Latest </li>
            <li> MyList </li>
            <li> Browser by Languages </li>
          </ul>
        </div>
      </div>

      <div className="header_right">
        <ul>
          <li>
            {" "}
            <SearchIcon />
          </li>
          <li>
            {" "}
            <NotificationsNoneIcon />
          </li>
          <li>
            {" "}
            <AccountBoxIcon />
          </li>
          <li>
            {" "}
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header

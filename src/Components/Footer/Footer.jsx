import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icon">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li> Audio Description </li>
                <li> Investor Relations </li>
                <li> Legal Notice </li>
                {/* <li> &copy;1997-2004</li> */}
                {/* <li className="service_code"> Service Code </li> */}
              </ul>
            </div>

            <div>
              <ul>
                <li> Help Center </li>
                <li> Jobs </li>
                <li> Cookie Preferences </li>
              </ul>
            </div>
            <div>
              <ul>
                <li> Gift Cards </li>
                <li> Terms of Use </li>
                <li> Corporate Information </li>
              </ul>
            </div>
            <div>
              <ul>
                <li> Media Center </li>
                <li> Privacy </li>
                <li> Contact Us </li>
              </ul>
            </div>
          </div>
          <div className='copy-write'>
            &copy; 1997-2024 Netflix, inc,
          </div>
          {/* <div className='service_code'> */}
          <p className="service_code"> Service Code </p>

        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Footer;
 
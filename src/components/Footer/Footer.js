import React from "react";
import "./footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="Footer_outer_container">
      <div className="Footer_inner_container">
        <div className="footer_icon">
          <ul>
            <li>
              <FacebookRoundedIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
        <div className="Footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester relation</li>
              <li>Legal notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help center</li>
              <li>Jops</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of use</li>
              <li> Corporate information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li> Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service code</p>
        </div>
        <div className="copy_write">&copy;1994-2024 Netflix,Inc</div>
      </div>
    </div>
  );
}

export default Footer;

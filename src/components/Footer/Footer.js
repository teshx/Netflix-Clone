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
              <li>
                {" "}
                <a className="footer_link" href="">
                  Audio Description
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Invester relation
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Legal notice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Help center
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Jops
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                {" "}
                <a className="footer_link" href=""></a>Gift Card
              </li>
              <li>
                {" "}
                <a className="footer_link" href=""></a>Terms of use
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Corporate information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Media center
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Privacy
                </a>
              </li>
              <li>
                {" "}
                <a className="footer_link" href="">
                  Contact us
                </a>
              </li>
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

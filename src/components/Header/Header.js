
import React from "react";
// import logo from "../../assets/images/netflix_Logos.jpg";
import logos from "../../assets/images/file1.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <>
      <div className="Header_outer_container">
        <div className="Header_container">
          <div className="Header_left">
            <ul>
              <li>
                <img className="logos" src={logos} alt="Netflix-lofo" />
              </li>
              <li>Home</li>
              <li>TvShow</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browser by Language</li>
            </ul>
          </div>
          <div className="Header-right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                {" "}
                <AccountBoxIcon />{" "}
              </li>
              <li>
                {" "}
                <ArrowDropDownIcon />{" "}
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
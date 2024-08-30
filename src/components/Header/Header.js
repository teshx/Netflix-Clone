import React, { useEffect, useState } from "react";
import logos from "../../assets/images/file1.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [show, handShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handShow(true);
      } else {
        handShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", handShow);
    };
  }, []);

  return (
    <>
      <div className="Header_outer_container ">
        <div className={`Header_container ${show && "nav-black"}`}>
          <div className="images">
            <img className="logos" src={logos} alt="Netflix-lofo" />
          </div>

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
              <li> Browser by Language</li>
            </ul>
          </div>

          <div className="drops">
            <MenuIcon />
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

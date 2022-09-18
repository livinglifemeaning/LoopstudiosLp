import React from "react";

import classes from "./Nav.module.css";
import navData from "./navData.json";

const Nav = (props) => {
  return (
    <div
      className={`${classes.nav} ${
        props.parent === "Header"
          ? classes.header
          : props.parent === "Footer"
          ? classes.footer
          : ""
      } ${props.isDesktop ? classes.desktop : classes.mobile}`}
    >
      {navData.map((link) => (
        <div className={classes.navLink} key={link.link}>
          <p className={classes.link}>{link.link}</p>
          {link.sublinks && (
            <ul className={classes.sublinks}>
              {link.sublinks.map((sublink) => (
                <li key={sublink}>{sublink}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Nav;

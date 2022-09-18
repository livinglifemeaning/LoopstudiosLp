import React from 'react'
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';
import classes from "./Footer.module.css"; 

const Footer = (props) => {
  const isDesktop = props.isDesktop
  return (
    <div className={`${classes.footer} ${isDesktop ? classes.desktop : classes.mobile}`}>
      <div className={classes.top}>
      <Logo/>
      <Nav parent="Footer" isDesktop={isDesktop}/>
      </div>
      <div className={classes.bottom}>
      <SocialMediaBar/>
      <p className={classes.copyright}>&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

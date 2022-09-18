import React from 'react'
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import PinterestIcon from './PinterestIcon';
import InstagramIcon from './InstagramIcon';
import classes from "./SocialMediaBar.module.css"; 
const SocialMediaBar = () => {
  
  return (
    <div className={classes.bar}>
      <FacebookIcon/>
      <TwitterIcon/>
      <PinterestIcon/>
      <InstagramIcon/>
    </div>
  )
}

export default SocialMediaBar

import React, {useEffect, useState} from 'react'
import { useScrollDirection } from '../../useScrollDirection'
import Logo from '../Logo/Logo'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Nav from '../Nav/Nav'
import classes from "./Header.module.css"; 
import HeroImgDesktop from "../../assets/desktop/image-hero.jpg"; 
import HeroImgMobile from "../../assets/desktop/image-hero.jpg";
const Header = (props) => {
  const scroll = useScrollDirection(); 
    const [navOpen, setNavOpen] = useState(false); 
    const isDesktop = props.isDesktop; 
    const toggleNav = () => {
        setNavOpen(prevState => !prevState)
    }
    useEffect(() => {
      if(isDesktop){
        setNavOpen(true)
    } else{
      setNavOpen(false)
    } 
    if(scroll === "down"){
      setNavOpen(false); 
    }
    }, [isDesktop, scroll])

  return (
    <div className={classes.header}>
      <img src={isDesktop ? HeroImgDesktop: HeroImgMobile} alt="" className={classes.headerImg}/>
    <div className={classes.content}> 
    <div className={`${classes.heading} ${isDesktop ? classes.desktop : classes.mobile} ${navOpen ? classes.navOpen : ""}`}>
      <Logo/>
      {!isDesktop && <HamburgerMenu navOpen={navOpen} onClick={toggleNav}/>}
      {(isDesktop || navOpen) && <Nav parent="Header" isDesktop={isDesktop}/>}
      </div>
      <div className={classes.heroText}>
        <p>Immersive experiences that deliver</p>
      </div>
    </div>
    </div>
  )
}

export default Header

import React from "react";
import Cards from "../Cards/Cards";
import classes from "./Body.module.css";
import VRManDesktop from "../../assets/desktop/image-interactive.jpg"; 
import VRManMobile from "../../assets/mobile/image-interactive.jpg"; 
const Body = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.top}>
        <div className={classes.vrPic}>
          <img
            src={props.isDesktop ? VRManDesktop : VRManMobile}
            alt="Man wearing vr mask"
          />
        </div>
        <div className={classes.vrDescription}>
          <p className={classes.descTitle}>The leader in interactive VR</p>
          <p className={classes.descP}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className={classes.creations}>
        <div className={classes.creationsTop}>
        <p className={classes.creationsTitle}>Our creations</p> 
        {props.isDesktop && <div className={classes.btn}>See all</div>}
        </div>
        <Cards isDesktop={props.isDesktop}/> 
        {!props.isDesktop && <div className={classes.btn}>See all</div>}
      </div>
    </div>
  );
};

export default Body;

import cardsData from "./cardsData.json";
import classes from "./Card.module.css";
import EarthDesktop from "../../assets/desktop/image-deep-earth.jpg"
import EarthMobile from "../../assets/mobile/image-deep-earth.jpg"
import ArcadeDesktop from "../../assets/desktop/image-night-arcade.jpg"
import ArcadeMobile from "../../assets/mobile/image-night-arcade.jpg"
import SoccerDesktop from "../../assets/desktop/image-soccer-team.jpg"
import SoccerMobile from "../../assets/mobile/image-soccer-team.jpg"
import GridDesktop from "../../assets/desktop/image-grid.jpg"
import GridMobile from "../../assets/mobile/image-grid.jpg"
import VRDesktop from "../../assets/desktop/image-from-above.jpg"
import VRMobile from "../../assets/mobile/image-from-above.jpg"
import BorealisDesktop from "../../assets/desktop/image-pocket-borealis.jpg"
import BorealisMobile from "../../assets/mobile/image-pocket-borealis.jpg"
import CuriosityDesktop from "../../assets/desktop/image-curiosity.jpg"
import CuriosityMobile from "../../assets/mobile/image-curiosity.jpg"
import FisheyeDesktop from "../../assets/desktop/image-fisheye.jpg"
import FisheyeMobile from "../../assets/mobile/image-fisheye.jpg"
const IMAGE_ARRAY_DESKTOP = [EarthDesktop, ArcadeDesktop, SoccerDesktop, GridDesktop, VRDesktop, BorealisDesktop, CuriosityDesktop, FisheyeDesktop]
const IMAGE_ARRAY_MOBILE = [EarthMobile, ArcadeMobile, SoccerMobile, GridMobile, VRMobile, BorealisMobile, CuriosityMobile, FisheyeMobile]
const Cards = (props) => {
  let isDesktop = props.isDesktop;
  return (
    <div className={classes.cards}>
      {cardsData.map((card) => {
        return (
          <div className={classes.card} key={card.title}>
            <img
              src={isDesktop ? IMAGE_ARRAY_DESKTOP[card.id -1] : IMAGE_ARRAY_MOBILE[card.id-1]}
              alt={card.title}
            />
            <div className={classes.cardText}>
              <p>{card.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

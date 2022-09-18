import cardsData from "./cardsData.json";
import classes from "./Card.module.css";
const Cards = (props) => {
  let isDesktop = props.isDesktop;
  console.log(isDesktop); 
  return (
    <div className={classes.cards}>
      {cardsData.map((card) => {
        return (
          <div className={classes.card} key={card.title}>
            <img
              src={isDesktop ? card.photoDesktop : card.photoMobile}
              alt={card.alt}
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

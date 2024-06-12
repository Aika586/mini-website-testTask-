import { useState, memo } from "react";
import ServiceCardDetail from "./serviceCardDetail/ServiceCardDetail";
import styles from "./ServiceCard.module.css";

const ServiceCard = memo(({ id, title, image, description }) => {
  const [cardId, setCardId] = useState(null);
  const [clickCard, setClickCard] = useState(false);
 
  //EVENT HANDLERS
  const handleClick = () => setCardId(id);
  const cardClickHandler = () => setClickCard(true);
  const handleModelClick = () => setCardId(null);

  return (
    <div className={ styles.card_wrapper} onClick={cardClickHandler}>
      <ul className={clickCard ? `${styles.card} ${styles.clicked}` : styles.card}>
        <li>
          <img src={image} alt={image} />
        </li>
        <li className={styles.title}>{title}</li>
        {clickCard && (
          <>
            <li>
              <p className={styles.description}>{description}</p>
            </li>
            <h3 onClick={handleClick}>ПОДРОБНЕЕ</h3>
          </>
        )}
        {cardId && (
          <li>
            <ServiceCardDetail cardId={cardId} onclick={handleModelClick} />
          </li>
        )}
      </ul>
    </div>
  );
});

export default ServiceCard;

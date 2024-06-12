import { useState, memo, useCallback } from "react";
import ServiceCardDetail from "./serviceCardDetail/ServiceCardDetail";

const ServiceCard = memo(({ id, title, image, description }) => {
  const [cardId, setCardId] = useState(null);
  const [clickCard, setClickCard] = useState(false);
  console.log(cardId);

  const handleClick = () => setCardId(id);
  const cardClickHandler = () => setClickCard(true);

  const handleModelClick = () => setCardId(null);

  return (
    <div onClick={cardClickHandler}>
      <ul>
        <li>
          <img src={image} alt={image} />
        </li>
        <li>{title}</li>
        {clickCard && (
          <>
            <li>
              <p>{description}</p>
            </li>
            <h3 onClick={handleClick}>Подробнее</h3>
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

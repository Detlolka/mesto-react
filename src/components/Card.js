import React from "react";

function Card({ clickCard, deleteCard, card }) {
  return (
    <div className="element">
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={() => clickCard(card)}
      />
      <div className="element__about">
        <p className="element__title">{card.name}</p>
        <div className="element__like-container">
          <button
            type="button"
            className="element__like"
            aria-label="Лайк"
          />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button
        type="button"
        className="element__del"
        aria-label="Удалить"
        onClick={deleteCard}
      />
    </div>
  );
}

export default Card;

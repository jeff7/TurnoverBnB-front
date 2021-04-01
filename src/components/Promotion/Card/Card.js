import React from "react";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import "./Card.css";

const PromotionCard = ({ promotion, onClickHistory, onClickDelete }) => {
  return (
    <div className="promotion-card">
      <div className="promotion-card__title">
        <h1>{promotion.name}</h1>
      </div>
      <div className="promotion-card__info">
        <div className="promotion-card__price">
          <span>R$ {promotion.price}</span>
        </div>
        <div className="promotion-card__comments">
          {promotion.quantity} Units
        </div>
        <button className="promotion-card__history" onClick={onClickHistory}>
          history
        </button>
      </div>
      <div className="promotion-card__edit">
        <Link
          className="promotion-card__link edit"
          to={`/edit/${promotion.id}`}
        >
          Edit
        </Link>
        <div className="promotion-card__link delete" onClick={onClickDelete}>
          <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;

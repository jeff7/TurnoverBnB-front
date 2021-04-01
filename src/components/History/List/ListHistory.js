import React from "react";
import "./ListHistory.css";

const PromotionListHistory = (promotion) => {
  return (
    <div className="History-List__content">
      <h2>
        There were {promotion.promotion.quantity} products available on{" "}
        {promotion.promotion.created_at}
      </h2>
    </div>
  );
};

export default PromotionListHistory;

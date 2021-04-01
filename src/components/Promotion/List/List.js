import React, { useState, useEffect } from "react";
import PromotionCard from "../Card/Card";
import PromotionModal from "../Modal/Modal";
import useApi from "components/utils/useApi";

import "./List.css";

const PromotionList = ({ loading, promotions, error, refetch }) => {
  const [values, setValues] = useState(null);
  const [promotionId, setPromotionId] = useState(null);

  const [deletePromotion, deletePromotionInfo] = useApi({
    url: `/product/${values}`,
    method: "DELETE",
  });

  async function deleteProduct() {
    await deletePromotion();
    if (!deletePromotionInfo.error) refetch();
  }

  useEffect(() => {
    if (values) {
      deleteProduct();
    }
  }, [values]);

  if (loading || !promotions) {
    return <div>Loading ...</div>;
  }

  if (!promotions.length) {
    return <div>No Products Found ...</div>;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard
          promotion={promotion}
          key={promotion.id}
          onClickHistory={() => setPromotionId(promotion.id)}
          onClickDelete={() => setValues(promotion.id)}
        />
      ))}
      {promotionId && (
        <PromotionModal
          promotionId={promotionId}
          onClickClose={() => setPromotionId(null)}
        />
      )}
    </div>
  );
};

export default PromotionList;

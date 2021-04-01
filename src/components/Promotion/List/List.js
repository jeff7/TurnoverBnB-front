import React, { useState, useEffect } from "react";

import PromotionCard from "../Card/Card";
import "./List.css";
import PromotionModal from "../Modal/Modal";
import useApi from "components/utils/useApi";

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
    return <div>Carregando ...</div>;
  }

  if (!promotions.length) {
    return <div>Nenhum resultado encontrado ...</div>;
  }

  if (error) {
    return <div>Erro encontado...</div>;
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

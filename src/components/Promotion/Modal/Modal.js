import React, { useEffect, useState } from "react";
import UIModal from "components/UI/Modal/Modal";
import useApi from "components/utils/useApi";
import PromotionListHistory from "../../History/List/ListHistory";

const PromotionModal = ({ promotionId, onClickClose }) => {
  const [values, setValues] = useState([]);

  const [load] = useApi({
    url: `/product/${promotionId}`,
    onCompleted: (response) => {
      setValues(response.data.data.Product);
    },
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <UIModal isOpen={Boolean(promotionId)} onClickClose={onClickClose}>
      {!values.history ? (
        <div>Loading ...</div>
      ) : (
        values.history.map((promotion) => (
          <PromotionListHistory promotion={promotion} />
        ))
      )}
    </UIModal>
  );
};

export default PromotionModal;

import PromotionForm from "components/Promotion/Form/Form";
import UIContainer from "components/UI/Container/Container";
import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <div>
      <UIContainer>
        <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
      </UIContainer>
    </div>
  );
};

export default PagesPromotionForm;

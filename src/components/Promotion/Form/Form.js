import React, { useState, useEffect } from "react";
import useApi from "components/utils/useApi";

import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const initialState = {
  name: "",
  quantity: "",
  price: "",
};
const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialState);
  const history = useHistory();
  const [load] = useApi({
    url: `/product/${id}`,
    method: "get",
    onCompleted: (response) => {
      setValues(response.data.data.Product);
    },
  });

  const [save, saveInfo] = useApi({
    url: id ? `/product/${id}` : "/product",
    method: id ? "put" : "post",
    data: values,
    onCompleted: (response) => {
      if (!response.error) history.push("/");
    },
  });

  useEffect(() => {
    if (id) {
      load();
    }
  }, []);

  function onChange(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    save();
  }

  if (!values) {
    return <div>Carregando ...</div>;
  }

  return (
    <div className="promotion-form">
      <h1>Promo Show</h1>
      {!id ? <h2> Nova Promoção </h2> : <h2> Editar Promoçao </h2>}

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="name">Title</label>
          <input
            onChange={onChange}
            id="name"
            name="name"
            value={values.name}
            type="text"
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="quantity">Units</label>
          <input
            onChange={onChange}
            id="quantity"
            name="quantity"
            value={values.quantity}
            type="number"
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Price</label>
          <input
            onChange={onChange}
            id="price"
            name="price"
            value={values.price}
            type="text"
          />
        </div>
        <div className="promotion-form__button">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default PromotionForm;

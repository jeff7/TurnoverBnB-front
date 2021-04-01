import React, { useState, useEffect } from "react";
import useApi from "components/utils/useApi";
import { Link } from "react-router-dom";

import "./Search.css";
import PromotionList from "../List/List";

const PromotionSearch = () => {
  const [Search, setSearch] = useState("");
  const [load, loadInfo] = useApi({
    url: "/product",
    method: "get",
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo Show</h1>
        <Link className="promotion-search__header_link" to="/create">
          New
        </Link>
      </header>
      <PromotionList
        promotions={loadInfo.data}
        error={loadInfo.error}
        loading={loadInfo.loading}
        refetch={() => {
          load();
        }}
      />
    </div>
  );
};

export default PromotionSearch;

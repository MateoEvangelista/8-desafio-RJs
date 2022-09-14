import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    //.then(setProducts(products.filter((product)=> product.category == category));
  }, []);

  return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
//[array].find((product) => product.id === id);

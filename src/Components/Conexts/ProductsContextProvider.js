import React, { useState, createContext, useEffect } from "react";

//API
import { getData } from "../../Services/api";

export const ProductContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");

  const valueHandler = (e) => {
    setSearch(e.target.value);
  };

  const sortHandler = (e) => {
    const sortByCategory = products.filter(
      (item) => item.category === e.target.value
    );
    if (e.target.value === "all") {
      setSort(products);
    } else {
      setSort(sortByCategory);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getData());
      setSort(await getData());
    };
    fetchAPI();
  }, []);

  const searchProducts = sort.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{
        sortProducts: searchProducts,
        functionSort: sortHandler,
        searchValue: search,
        valueHandler: valueHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;

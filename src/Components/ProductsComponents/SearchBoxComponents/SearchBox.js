import React, { useContext } from "react";

//CSS
import styles from "./SearchBox.module.css";

//Contexts
import { ProductContext } from "../../Conexts/ProductsContextProvider";

const SearchBox = () => {
  const { functionSort, searchValue, valueHandler } =
    useContext(ProductContext);

  return (
    <div className={styles.content}>
      <div className={styles.topSection}></div>
      <div className={styles.serchBox_Category}>
        <div className={styles.serchBox}>
          <input
            type="text"
            placeholder="Search In Products..."
            value={searchValue}
            onChange={valueHandler}
          />
          <select onChange={functionSort}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">men's Clothing</option>
            <option value="women's clothing">women's Clothing</option>
          </select>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>
            <h1>Balou Shop</h1>
          </div>
          <div className={styles.categoryList}>
            <span>Electronics</span>
            <span>Jewelery</span>
            <span>men's Clothing</span>
            <span>women's Clothing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

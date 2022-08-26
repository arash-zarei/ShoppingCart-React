import React from "react";

import { Link } from "react-router-dom";

//CSS
import styles from "./Product.module.css";

//Functions
import { shortTitle } from "../../../Helpers/Functions";

//Components
import Button from "../../ButtonsComponent/Button";

const Product = ({ productsData }) => {

  const { title, price, category, image, id } = productsData;

  return (
    <div className={styles.card}>
      <img src={image} alt="product" />
      <div className={styles.title}>
        <h4 className={styles.name}>{shortTitle(title)}</h4>
        <p className={styles.category}>
          <span>Category:</span> {category}
        </p>
        <div>
          <p className={styles.price}>{price} $</p>
          <Link to={`/products/${id}`}>Details</Link>
        </div>
      </div>
      <div className={styles.btns}>
        <Button data={productsData} />
      </div>
    </div>
  );
};

export default Product;

import React, { useContext } from "react";

import { Link } from "react-router-dom";

//Logo Font
import * as Unicons from "@iconscout/react-unicons";

//CSS
import styles from "./Cart.module.css";

//Contexts
import { CartContext } from "../Conexts/CartContextProvider";

//Components
import CartItem from "./CartItem";

const Cart = () => {

  const { state, dispatch } = useContext(CartContext);
  const products = state.selectedItems;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItem}>
        {
          products.map(item => <CartItem key={item.id} data={item} />)
        }
      </div>
        <div className={styles.details}>
          {
            products.length > 0 &&
            <div className={styles.isIncart}>
              <h3>Total Producs : {state.itemsCounter}</h3>
              <h4>Total Price: {state.total}</h4>
              <div className={styles.btns}>
                <button onClick={() => dispatch({type: 'CHECKOUT'})}>CheckOut</button>
                <button onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
              </div>
            </div>
          }

          {
            products.length === 0 && !state.checkout &&
            <div className={styles.goToShop}>
              Cart Is Emmpety,  
              <Link to="/products">Go To Shop</Link>
            </div> 
          }

          {
            state.checkout &&
            <div className={styles.checked}>
              <Unicons.UilCheckCircle size="140" color="#32f53c" />
              <Link to="/products">By More !</Link>
            </div>
          }
        </div>
    </div>
  );
};

export default Cart;

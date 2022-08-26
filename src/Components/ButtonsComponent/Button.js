import React, { useContext } from "react";


//CSS
import styles from "./Button.module.css";

//Logo Font
import * as Unicons from "@iconscout/react-unicons";

//Contexts
import { CartContext } from "../Conexts/CartContextProvider";

//Functions
import { isInCart, quantityCount } from "../../Helpers/Functions";

const Button = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
         {quantityCount(state, data.id) === 1 && <button id={styles.remove} className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><Unicons.UilTrash /> </button>}
         {quantityCount(state, data.id) > 1 && <button id={styles.minus} className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: data})}><Unicons.UilMinus /></button>}
         {quantityCount(state, data.id) > 0 && <span className={styles.counter}>{quantityCount(state, data.id)}</span>}
         {
              isInCart(state, data.id) ?
              <button id={styles.plus} className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: data})}><Unicons.UilPlus /></button> :
              <button className={styles.btnAddCart} onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
          }
    </>
  );
};

export default Button;

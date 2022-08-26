import React,{ useContext } from 'react';

//CSS
import styles from './CartItem.module.css'

//Functions
import { shortTitle } from '../../Helpers/Functions';

//Components
import Button from '../ButtonsComponent/Button';

//Contexts
import { CartContext } from '../Conexts/CartContextProvider';


const CartItem = (props) => {

    const {image, title, price, id, quantity} = props.data
    const {dispatch} = useContext(CartContext)

    return (
        <div className={styles.cartItem}>
            <img src={image} alt={id} />
            <div className={styles.title}>
                <h2>{shortTitle(title)}</h2>
                <p>{price} $</p>
            </div>
            <div className={styles.btnsCart}>
                <Button data={props.data} />
            </div>
        </div>
    );
};

export default CartItem;
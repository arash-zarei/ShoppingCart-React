import React,{ useContext } from 'react';

import { Link } from 'react-router-dom';

//Logo Font
import * as Unicons from "@iconscout/react-unicons";

//CSS
import styles from './Header.module.css' 

//Contexts
import { CartContext } from '../Conexts/CartContextProvider';

const Header = () => {

    const {state} = useContext(CartContext)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/products"><h2>Balou Shop</h2></Link>
                <Link to="/cart">
                    <Unicons.UilShoppingCart size="40" />
                    <span className={styles.count}>{state.itemsCounter}</span>
                </Link>
            </div>            
        </header>
    );
};

export default Header;
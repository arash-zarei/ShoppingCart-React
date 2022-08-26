import React,{ useContext } from 'react';

//CSS
import styles from './Products.module.css'

//Components
import Product from './Product';
import Loading from '../../Loading';

//Contexts
import { ProductContext } from '../../Conexts/ProductsContextProvider';

const Products = () => {

    const {sortProducts} = useContext(ProductContext)

    return (
        <div className={styles.content}>
            {
                sortProducts.length === 0 ?
                <Loading />
                :
                sortProducts.map(product => <Product key={product.id} productsData={product} />)
            }
        </div>
    );
};

export default Products;
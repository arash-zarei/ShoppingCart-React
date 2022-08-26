import React from 'react';

//Components
import SearchBox from './SearchBoxComponents/SearchBox';
import Products from './ProductsComponents/Products';

const HomePage = () => {
    return (
        <div>
            <SearchBox />
            <Products />
        </div>
    );
};

export default HomePage;
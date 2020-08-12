import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './SearchComponent/search';
import {Products, products} from './ProdukComponent/product';

function Apps() {
    return(
        <div className="container">
            <Search/>
            <Products/>
        </div>
    )
}

ReactDOM.render(<Apps/>, document.getElementById('root'));
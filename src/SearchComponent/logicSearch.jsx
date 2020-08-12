import React, { useState } from 'react';
import { useEffect } from 'react';
import {Products, products} from '../ProdukComponent/product';

function Logic() {
    let [text, setText] = useState('');
    let [product, setProduct] = useState(products);
    let [valueText, setValue] = useState('');

    const setFuncText = (e) => {
        setText(text = e.target.value);
    }

    const handleValueInput = () => {
        product.filter(item => {
            if(item.name.toUpperCase().includes(text.toUpperCase())){
                console.log(item.name);
            }
        })
    }

    useEffect(() => {
        handleValueInput();
    })

    return [text,setFuncText, valueText , handleValueInput];
}

export default Logic;
import React from 'react';
import { useState } from 'react';
import './product.css';
import Logic from '../SearchComponent/logicSearch';
import { useEffect } from 'react';

export const products = [
    {
        name: "Cappucino",
    }, {
        name: "Green Tea Latte",
    },
    {
        name: "Fish and Chips",
    },
    {
        name: "Tuna Sandwich",
    },
    {
        name: "Mineral Water",
    },
    {
        name: "French Fries",
    },
];

export function Products() {
    const [product, setProduct] = useState(products);
    const [value, setFuncText, valueText, handleValueInput] = Logic('');

    return (
            <div className="product">
                {product.map((items,index) => {
                    return <div key={index}>{items.name}</div>
                })}
            </div>
            )
}

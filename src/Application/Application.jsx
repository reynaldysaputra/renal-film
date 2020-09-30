import React from 'react';
import './Application.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {products} from '../ProdukComponent/product';

function Application() {
    const [text, setText] = useState('');
    const product = products;

    const data = product.filter(item => {
        return item.name.toUpperCase().includes(text.toUpperCase());
    })

    return(
        <main>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Masukan Kata kunci pencarian"
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div className="product">
                {
                    data.map((item,index) => {
                        return <div key={index}>{item.name}</div>
                    })
                }
            </div>
        </main>
    )
}

export default Application;
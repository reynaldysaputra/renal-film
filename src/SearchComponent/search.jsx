import React from 'react';
import './search.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Logic from './logicSearch';

function Search() {
    const [text, setFuncText, valueText, handleValueInput] = Logic('');

    return(
        <div className="search">
            <input 
                type="text" 
                placeholder="Masukan Kata kunci pencarian"
                onChange = {(e) => setFuncText(e)}
            />
        </div>
    )
}

export default Search;
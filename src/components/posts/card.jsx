import * as React from 'react';
import style from './style.module.css'

function Card({brand, id, price ,product}){
    return(
        <div className={style.cardBox}>
            <h3>{product}</h3>
            <p>Бренд: {brand == null ? "без имени" : brand}</p>
            <p>цена: {price}</p>
            <p>id: {id}</p>
        </div>
    )
}

export default Card
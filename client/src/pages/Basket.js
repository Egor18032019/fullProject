import React, {useContext} from 'react';
import {observer,} from "mobx-react-lite";
import {Context} from "../index";
import BasketItem from "../../src/components/BasketItem";

const Basket = observer(() => {
    const {basket} = useContext(Context)
    console.log(basket.basketItems)
    console.log(basket.basketItems[0])
 
    return ( <div className = "ml-auto" >
             <ul className="basket-list">
                {basket.basketItems.map(item =>
                <BasketItem key={item.id} device={item}/>
                 )}
            </ul>
        </div>)
});

export default Basket;
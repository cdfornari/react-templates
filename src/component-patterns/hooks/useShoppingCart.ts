import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces/productInterfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});
    const onProductCountChange = ({product,count}: onChangeArgs) => {
      setShoppingCart(prev => {
        if(count === 0){
            const {[product.id]: toDelete, ...rest} = prev;
            return rest;
        }else{
            return {
                ...prev,
                [product.id]: {
                    ...product,
                    count
                }
            }
        }
      })
    }
    return {
        shoppingCart,
        onProductCountChange
    }
}
import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/productInterfaces';

interface usePorductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange,product,value = 0}: usePorductArgs) => {
    const [counter, setCounter] = useState(value);
    useEffect(() => {
      setCounter(value);
    }, [value])
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        onChange && onChange({product, count: newValue});
    };
    return {
        counter,
        increaseBy
    }
}
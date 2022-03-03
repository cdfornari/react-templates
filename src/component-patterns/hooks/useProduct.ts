import { useEffect, useRef, useState } from 'react';
import { Product, InitialValues } from '../interfaces/productInterfaces';

interface usePorductArgs {
    product: Product;
    initialValues?: InitialValues;
}

export const useProduct = ({product,initialValues}: usePorductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || 0);
    const isMounted = useRef(false);
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(initialValues?.count || 0);
    }, [initialValues?.count])
    useEffect(() => {
        isMounted.current = true;
    }, [])
    const reset = () => {
        setCounter(initialValues?.count || 0);
    }
    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if(initialValues?.maxCount && newValue > initialValues.maxCount) 
            newValue = initialValues.maxCount;
        setCounter(newValue);
    };
    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset
    }
}
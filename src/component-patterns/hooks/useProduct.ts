import { useEffect, useRef, useState } from 'react';
import { InitialValues } from '../interfaces/productInterfaces';

interface usePorductArgs {
    initialValues?: InitialValues;
}

export const useProduct = ({initialValues}: usePorductArgs) => {
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
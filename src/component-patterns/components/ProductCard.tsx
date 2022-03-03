import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps, InitialValues, ProductCardHandlers } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    product: Product;
    style?: CSSProperties;
    initialValues?: InitialValues;
}

export const ProductCard = ({children,product,className,style,initialValues}: Props) => {
    const {counter,increaseBy,isMaxCountReached,reset} = useProduct({initialValues});
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount: initialValues?.maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children({
                        count: counter,
                        product,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
}
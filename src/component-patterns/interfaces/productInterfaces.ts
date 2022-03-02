import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ImageTitleProps} from '../components/ProductImage';
import { Props as ProductTitleProps} from '../components/ProductTitle';
import { Props as ProductButtonsProps} from '../components/ProductButtons';

export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number)=>void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ImageTitleProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
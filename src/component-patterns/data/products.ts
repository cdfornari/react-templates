import { Product } from '../interfaces/productInterfaces';

const product = {
    id: '123',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}
const product2 = {
    id: '321',
    title: 'Coffee Mug Meme',
    img: './coffee-mug2.png'
} 
export const products: Product[] = [product,product2]
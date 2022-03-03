import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { Product, onChangeArgs, ProductInCart } from '../interfaces/productInterfaces';
import { useState } from "react";
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart();
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          {
            products.map(product => (
              <ProductCard 
                product={product} 
                className="bg-dark text-white" 
                key={product.id}
                onChange={onProductCountChange}
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage className="custom-image" />
                <ProductTitle title='Custom title' className="text-bold"/>
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          }
        </div>
        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key,product]) => (
              <ProductCard 
                key={key}
                product={product} 
                className="bg-dark text-white" 
                style={{width: '100px'}}
                onChange={onProductCountChange}
                value={product.count}
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          }
        </div>
    </div>
  )
}
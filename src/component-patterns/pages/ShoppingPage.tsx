import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <ProductCard 
          product={product} 
          initialValues={{
            count: 5,
            maxCount: 10
          }}
        >
          {
            ({
              count,
              product,
              maxCount,
              isMaxCountReached,
              increaseBy,
              reset
            }) => (
              <>
                <ProductImage />
                <ProductTitle title='Custom title' />
                <ProductButtons />
              </>
            )
          }
        </ProductCard>
    </div>
  )
}
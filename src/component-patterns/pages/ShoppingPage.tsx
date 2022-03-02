import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
  id: '123',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle title='Custom title'/>
            <ProductButtons />
          </ProductCard>

          <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        </div>
    </div>
  )
}
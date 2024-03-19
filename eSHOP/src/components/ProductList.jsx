import Product from "./Product"

const ProductList = () => {
  return (
    <div className="productList">
        <div className="productList__row">
            <Product/>
            <Product/>
        </div>
        
        <div className="productList__row">
            <Product/>
            <Product/>
            <Product/>
        </div>
        
        <div className="productList__row">
            <Product/>
        </div>
    </div>
  )
}

export default ProductList

const Product = () => {
  return (
    <div className="product">
        <div className="product__info">
            <p>Title</p>
            <p className="product__price">$30</p>
            <div className="product__rating">⭐⭐⭐⭐</div>
        </div>
        <img src="" alt="product__image"  className="product__image"/>
        <button className="">Add to basket</button>
    </div>
  )
}

export default Product
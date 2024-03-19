/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Product = ({id, title, image, price, rating}) => {
  return (
    <div className="product" key={id}>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
                { 
                  Array(rating)
                    .fill()
                    .map((index) => <span key={index}>⭐</span>
                )}
            </div>
        </div>
        <img src={image} alt="product__image"  className="product__image"/>
        <button className="">Add to basket</button>
    </div>
  )
}

export default Product
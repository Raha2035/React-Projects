
const checkoutProduct = ({id, title, image, price, rating}) => {
  return (
    <div className="checkoutProduct" key={id}>
        <img src={image} alt="Checkout Image" className="checkoutProduct__image"/>

        <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((index) => (
                        <span key={index}>⭐</span>
                    ))}
                </div>
                <button>Remove from Basket</button>
            </div>
    </div>
  )
}

export default checkoutProduct
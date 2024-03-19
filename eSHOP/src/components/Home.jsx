import ProductList from "./ProductList"

const Home = () => {
  return (
    <div className="home">
        <div className="home__container">
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="Home image" className="home__image" />
            <ProductList/>
        </div>
    </div>
  )
}

export default Home
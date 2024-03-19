// import { Link } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="header__logo">
            <StorefrontIcon fontSize='large' className='header__logoImage'/>
            <h2 className="header__logoTitle">eShop</h2>
        </Link>

        <div className="header__search">
            <input type="text" className='header__searchInput'/>
            <div className="header__searchIcon">
                <SearchIcon/> 
            </div>
        </div>

        <div className="header__nav">
            <div className="header__navItem">
                <span className="header__navItemLineOne">Hello Guest</span>
                <span className="header__navItemLineTwo">Sign In</span>
            </div>
            <div className="header__navItem">
                <span className="header__navItemLineOne">Your</span>
                <span className="header__navItemLineTwo">Shop</span>
            </div>

            <Link to="checkout" style={{ textDecoration: "none"}}>
                <div className="header__navItemBasket"> 
                    <ShoppingBasketIcon/>
                    <span className="header__navItemLineTwo header__basketCount">0</span>
                </div>
            </Link>

        </div>
    </header>
  )
}

export default Header
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';


const Header = () => {
  return (
    <header className="header">
        <a href="#" className="header__logo">
            <StorefrontIcon fontSize='large' className='header__logoImage'/>
            <h2 className="header__logoTitle">eShop</h2>
        </a>

        <div className="header__search">
            <input type="text" className='header__searchInput'/>
            <SearchIcon className='header_searchIcon'/> 
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign In</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>
            <div className="nav__item">
                <ShoppingBasketIcon/>
                <span className="nav__itemLineTwo">0</span>
            </div>
        </div>
    </header>
  )
}

export default Header
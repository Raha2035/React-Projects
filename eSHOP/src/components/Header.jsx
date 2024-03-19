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
            <div className="header__navItemBasket">
                <ShoppingBasketIcon/>
                <span className="header__navItemLineTwo header__basketCount">0</span>
            </div>
        </div>
    </header>
  )
}

export default Header
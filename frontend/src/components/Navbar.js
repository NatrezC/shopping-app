import './Navbar.css'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>Market</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        cart
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                        
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar

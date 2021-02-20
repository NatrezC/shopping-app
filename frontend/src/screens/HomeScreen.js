import './HomeScreen.css';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <h2 className="homescreen__title">My Products</h2>

            <div className="homescreen__products">
                <Product />
            </div>
            Home Screen
        </div>
    )
}

export default HomeScreen

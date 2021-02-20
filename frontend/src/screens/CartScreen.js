import './CartScreen.css'
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>

                <CartItem/>
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p>
                    <p> $500</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
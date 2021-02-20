import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="name" />
            
            <div className="product__info">
                <p className="info__name">PS5</p>
                <p className="info__description">gadkkjfdajona dogdoadkfjoajodoakd oadkg dao gdoakdgdgj ;d gokd  </p>
                <p className="info__price">$499</p>
                <Link to={`/product/${productId}`} className="info__button">View</Link>
            </div>
        </div>
        // <div className="product">
        //     <img src={imageUrl} alt={name} />

        //     <div className="product__info">
        //         <p className="info__name">{name}</p>

        //         <p className="info__description">{description}</p>

        //         <p className="info__price">${price}</p>

        //         <Link to={`/product/${productId}`} className="info__button">
        //             View
        //         </Link>
        //     </div>
        // </div>
    );
};

export default Product;
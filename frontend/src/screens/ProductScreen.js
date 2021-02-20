import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen_left">
                <div classname="left__image">
                    <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>PRice: $500</p>
                    <p>Description: Lorem djlfjdoja odoads oj; ajdj d sjdasoj sd jdlk vod</p>
                </div>
            </div>
            <div className="productscreen_right">
                <div className="right__info">
                    <p>
                        Price: <span>$500</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Quantity:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
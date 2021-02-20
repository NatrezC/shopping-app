import './HomeScreen.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch()
    
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts; // before mapping check for loading or errors

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])


    return (
        <div className="homeScreen">
            <h2 className="homescreen__title">My Products</h2>

            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                    <Product />
                ))}
            </div>
            Home Screen
        </div>
    )
}

export default HomeScreen

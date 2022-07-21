import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';


const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state);

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    React.useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail(productId);
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div className='ui grid container'>
            {Object.keys(products.product).length === 0 ? (
                <div style={{ margin: "40px" }}>...loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={products?.product?.image} />
                            </div>
                            <div className="column rp">
                                <h1>{products?.product?.title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${products?.product?.price}</a>
                                </h2>
                                <h3 className="ui brown block header">{products?.product?.category}</h3>
                                <p>{products?.product?.description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )

}

export default ProductDetails;
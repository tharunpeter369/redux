import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'


const ProductListing =()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        .catch(err=>console.log(err))
        dispatch(setProducts(res.data))
    }

    React.useEffect(()=>{
        fetchProducts();
    }
    ,[])


    return(
        <div className='ui grid container'>
            {/* <h1>Product Listing</h1> */}
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;


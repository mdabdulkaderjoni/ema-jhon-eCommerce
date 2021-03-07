import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey}=useParams()
    // console.log(useParams())
    //console.log(productKey)
    // fakeData.find(pd=>console.log(pd.key))
    const product=fakeData.find(pd=>pd.key===productKey)
   // console.log(product)
    //console.log(fakeData);
    
    
    // console.log(fakeData)
    return (
        <div>
            <h1>{productKey} Details Here</h1>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetails;
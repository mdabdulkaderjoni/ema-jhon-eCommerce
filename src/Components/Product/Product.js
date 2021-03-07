import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock,key} = props.product;
    console.log('list of products',props.product)
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br></br>
                <p><small>by: {seller}</small></p>
                <br></br>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                
            </div>

        </div>
    );
};

export default Product;
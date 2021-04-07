import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    
    return (
        <div className='col-md-4'>
            <div className="box-style" style={{margin: '20px', padding: '20px'}}>
                <img style={{width: '250px', height: '250px'}} src={product.imageURL} alt=""/>
                <h4>{product.name}- {product.quantity}</h4>
                <div className='d-flex justify-content-between'>
                    <h4 className="text-success">{product.price}</h4>
                    <Button variant="success" as={Link} to={`/checkOut/${product._id}`}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Product;
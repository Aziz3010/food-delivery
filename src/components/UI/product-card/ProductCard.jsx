import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/productCard.css';

const ProductCard = ({product}) => {
  return (
    <div className='product_item'>
        <div className="product_image">
            <img src={product.image01} alt={product.title} className='w-50' />
        </div>

        <div className="product_content">
            <h5><Link to={`/foods/${product.id}`}>{product.title}</Link></h5>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='product_price'>{`$${product.price}`}</span>
                <button className='addToCart_btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
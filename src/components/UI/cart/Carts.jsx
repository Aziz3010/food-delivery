import React from 'react';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/shopping-cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { CartUiActions } from '../../../store/shopping-cart/CartUiSlice';

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(CartUiActions.toggle());
    }

    return <div className='cart_container'>
        <ListGroup className='cart rounded-0'>
            <div className="cart_close">
                <span onClick={toggleCart}><i className='ri-close-fill'></i></span>
            </div>
            <div className="cart_item_list">
                {
                    cartProducts.length === 0 ? <h6 className='text-center mt-4'>No item added to the cart</h6> : cartProducts.map((item, index) => ( <CartItem item={item} key={index} /> ) )
                }
            </div>
            <div className="cart_buttom">
                <h6>subtotal: <span>${totalAmount}</span></h6>
                <Link to='/checkout'>Checkout</Link>
            </div>
        </ListGroup>
    </div>
};

export default Carts;
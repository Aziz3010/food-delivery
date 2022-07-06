import React from 'react';
import { ListGroupItem } from 'reactstrap';
import '../../../styles/cart-item.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({item}) => {
  const { id, title, image01, price, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price,
    }));
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id))
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  };
  

  return <ListGroupItem className='cart_item'>
    <div className="cart_item_info">
        <img src={image01} alt={title} />
        <div className="cart_product_info">
            <div>
                <h6 className='cart_product_title'>{title}</h6>
                <p className='cart_product_price-quantity'>{quantity}x <span>${totalPrice}</span></p>
                <div className='cart_product_counter'>
                    <span onClick={incrementItem} className='increase_btn'><i className='ri-add-line'></i></span>
                    <span className='quantity'>{quantity}</span>
                    <span onClick={decrementItem} className='decrease_btn'><i className='ri-subtract-line'></i></span>
                </div>
            </div>
            <span onClick={deleteItem} className='delete_btn'><i className='ri-close-line'></i></span>
        </div>
    </div>
  </ListGroupItem>
}

export default CartItem;
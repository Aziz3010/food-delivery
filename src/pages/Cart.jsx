import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import '../styles/cart-page.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <>
      <Helmet title='Cart' >
        <CommonSection title='Your Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                {
                  cartItems.length === 0 ? <h5 className='m-0 text-center'>Your cart is empty</h5> :
                    <div className="table-responsive">
                      <table className='table table-bordered text-center'>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Tilte</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            cartItems.map((item, index) => (<Tr item={item} key={index} />))
                          }
                        </tbody>
                      </table>
                    </div>
                }
                <div className='mt-4 cart_page'>
                  <h6 className='mb-2'>Subtotal: <span>${totalAmount}</span></h6>
                  <p className='mb-4'>Taxes and shipping will calculate at checkout</p>
                  <div className='cart_page_btns'>
                    <Link className='addToCart_btn text-white me-4' to={'/foods'}>Continue shopping</Link>
                    <Link className='addToCart_btn text-white' to={'/checkout'}>Porceed to checkout</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <tr className='table-row'>
      <td className='table-image'><img src={image01} alt={title} /></td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}x</td>
      <td className='table-delete'><i onClick={deleteItem} className='ri-delete-bin-line'></i></td>
    </tr>
  )
}

export default Cart;
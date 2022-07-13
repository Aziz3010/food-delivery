import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import CommenSection from '../components/UI/common-section/CommonSection';
import '../styles/checkout.css';

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterPhone, setEnterPhone] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [enterPostalCode, setEnterPostalCode] = useState('');
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const shippingInfo = [];

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      Name: enterName,
      Phone: enterPhone,
      Email: enterEmail,
      Country: enterCountry,
      City: enterCity,
      PostalCode: enterPostalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  }

  return (
    <>
      <Helmet title='Checkout' >
        <CommenSection title='Checkout' />
        <section>
          <Container>
            <Row>
              <Col lg='7' md='6'>
                <h6 className='mb-4'>Shipping Address</h6>
                <form className="checkout_form mb-4" onSubmit={submitHandler}>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterName(e.target.value)} className='ps-0' type="text" placeholder='Your name' />
                  </div>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterPhone(e.target.value)} className='ps-0' type="number" placeholder='Phone number' />
                  </div>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterEmail(e.target.value)} className='ps-0' type="text" placeholder='Your email' />
                  </div>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterCountry(e.target.value)} className='ps-0' type="text" placeholder='Your country' />
                  </div>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterCity(e.target.value)} className='ps-0' type="text" placeholder='Your city' />
                  </div>
                  <div className="form_group">
                    <input required onChange={(e) => setEnterPostalCode(e.target.value)} className='ps-0' type="number" placeholder='Postal code' />
                  </div>
                  <button type='submit' className='addToCart_btn'>Payment</button>
                </form>
              </Col>

              <Col lg='5' md='6'>
                <div className='checkout_bill'>
                  <h6 className='d-flex justify-content-between align-items-center'>Subtotal: <span>${cartTotalAmount}</span></h6>
                  <h6 className='d-flex justify-content-between align-items-center mt-3'>Shipping: <span>${shippingCost}</span></h6>
                  <div className='mt-5 checkout_total'>
                    <h5 className='d-flex justify-content-between align-items-center'>Total: <span>${totalAmount}</span></h5>
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

export default Checkout;
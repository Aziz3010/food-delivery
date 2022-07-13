import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import { useParams } from 'react-router-dom';
import products from '../assets/fake-data/products';
import '../styles/foodDetails.css';
import ProductCard from '../components/UI/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

const FoodDetails = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredReview, setEnteredReview] = useState('');
  const reviews = [];
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const product = products.find(product => product.id === id)
  const { title, image01, image02, image03, desc, category, price } = product;
  const relatedProduct = products.filter(item => item.category === category);
  const [previewImage, setPreviewImage] = useState(image01);
  useEffect(() => { setPreviewImage(product.image01) }, [product]);
  useEffect(() => { window.scrollTo(0, 0) }, [product]);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const userReview = {
      Name: enteredName,
      Email: enteredEmail,
      Review: enteredReview,
    };
    reviews.push(userReview);
    console.log(reviews);
  }

  return (
    <>
      <Helmet title='Details' >
        <CommonSection title={title} />
        <section>
          <Container>
            <Row>
              {/* images */}
              <Col lg='2' md='2'>
                <div className="product_details_images">
                  <div className="product_details_image_item">
                    <img src={image01} alt="image01" className='w-50' onClick={() => { setPreviewImage(image01) }} />
                  </div>
                  <div className="product_details_image_item">
                    <img src={image02} alt="image02" className='w-50' onClick={() => { setPreviewImage(image02) }} />
                  </div>
                  <div className="product_details_image_item">
                    <img src={image03} alt="image03" className='w-50' onClick={() => { setPreviewImage(image03) }} />
                  </div>
                </div>
              </Col>
              {/* main image */}
              <Col lg='4' md='4'>
                <div className="product_details_main_image">
                  <img src={previewImage} alt="image01" className='w-100' />
                </div>
              </Col>
              {/* info */}
              <Col lg='6' md='6'>
                <div className="single_product_content">
                  <h2 className='product_content_title mb-3'>{title}</h2>
                  <p className='product_price'>Price: <span>{`$ ${price}`}</span></p>
                  <p className='product_content_category'>Category: <span>{category}</span></p>
                  <button className='addToCart_btn' onClick={addToCart}>Add To Cart</button>
                </div>
              </Col>
              {/* Description & Review */}
              <Col lg='12' className='my-4'>
                {/* tabs */}
                <div className="tabs d-flex align-items-center gap-5 py-3">
                  <h6 onClick={() => setTab('desc')} className={tab === 'desc' ? 'tabs_active' : ''}>Description</h6>
                  <h6 onClick={() => setTab('review')} className={tab === 'review' ? 'tabs_active' : ''}>Review</h6>
                </div>

                {/* Description & Reviews */}
                {
                  tab === 'desc' ?
                    (<div className="tabs_desc">
                      <p>{desc}</p>
                    </div>)
                    :
                    (<div className="tab_form">
                      <div className="reviews">
                        {
                          reviews.map((item, index) => (
                            <div className="review" key={index}>
                              <p className="user_name">{item.Name}</p>
                              <p className="user_email">{item.Email}</p>
                              <p className="feedback_text">{item.Review}</p>
                            </div>
                          ))
                        }
                      </div>
                      <form className='form' onSubmit={submitHandler}>
                        <div className='form_group'>
                          <input type="text" required placeholder='Enter your name' onChange={(e) => setEnteredName(e.target.value)} />
                        </div>
                        <div className='form_group'>
                          <input type="email" required placeholder='Enter your email' onChange={(e) => setEnteredEmail(e.target.value)} />
                        </div>
                        <div className='form_group'>
                          <textarea rows='5' required placeholder='Enter your review' onChange={(e) => setEnteredReview(e.target.value)} />
                        </div>
                        <button type='submit' className='addToCart_btn w-100'>Submit</button>
                      </form>
                    </div>)
                }
              </Col>
              {/* relatedProduct */}
              <Col lg='12'>
                <h2 className='relatedProduct-title mb-4'>You might also like</h2>
                <Row>
                  {
                    relatedProduct.map((item, index) => (
                      <Col lg='3' md='4' sm='6' className='mt-3' key={index}>
                        <ProductCard product={item} />
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default FoodDetails;
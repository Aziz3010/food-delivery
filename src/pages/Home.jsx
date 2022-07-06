import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg from '../assets/images/hero.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import ProductCard from '../components/UI/product-card/ProductCard';
import products from '../assets/fake-data/products';
import CategoryImg01 from '../assets/images/hamburger.png';
import CategoryImg02 from '../assets/images/pizza.png';
import CategoryImg03 from '../assets/images/bread.png';
import WhyImg from '../assets/images/location.png';
import NetWorkingImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quaerat!'
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facere. Consectetur odit commodi in non.'
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
];

const Home = () => {
  const [category, setCategory] = useState('all');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [])

  useEffect(() => {
    if (category === 'all') {
      setAllProducts(products);
    }
    if (category === 'Burger') {
      const filteredProducts = products.filter(item => item.category === 'Burger');
      setAllProducts(filteredProducts);
    }
    if (category === 'Pizza') {
      const filteredProducts = products.filter(item => item.category === 'Pizza');
      setAllProducts(filteredProducts);
    }
    if (category === 'Bread') {
      const filteredProducts = products.filter(item => item.category === 'Bread');
      setAllProducts(filteredProducts);
    }
  }, [category])

  return (
    <>
      <Helmet title='Home' >

        <section>
          <Container>
            <Row>

              <Col lg='6' md='6'>
                <div className="hero_content">
                  
                  <h5 className='mb-3'>Easy way to make an order</h5>
                  
                  <h1 className='mb-4 hero_title'><span className='text-uppercase'>Hungry?</span> Just wait<br/>food at <span>your door</span></h1>
                  
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis sed, consequatur nisi odit consequuntur!</p>
                  
                  <div className="hero_btns d-flex justify-content-start align-items-center gap-5 mt-4">
                    <button className='order_btn'>Order now<i className="ri-arrow-right-s-line"></i></button>
                    <Link to='/foods' className='all_foods_btn'>See all foods</Link>
                  </div>
                  
                  <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'>
                      <span><i className='ri-car-line'></i></span> No shipping charge
                    </p>
                    <p className='d-flex align-items-center gap-2'>
                      <span><i className='ri-shield-check-line'></i></span> 100% secure checkout
                    </p>
                  </div>

                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero_image">
                  <img src={heroImg} alt="heroImg" className='w-100' />
                </div>
              </Col>

            </Row>
          </Container>
        </section>

        <section className='pt-0'>
          <Category />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h5 className='feature_subtitle mb-4'>What we serve</h5>
                <h2 className='feature_title'>Just sit back at home</h2>
                <h2 className='feature_title'>we will <span>take care</span></h2>
                <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, totam.</p>
                <p className='mb-0 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aspernatur?</p>
              </Col>

              {
                featureData.map((item, index) => (
                  <Col lg='4' md='4' key={index} className='mt-5'>
                    <div className="feature_item text-center px-5 py-3">
                      <img src={item.imgUrl} alt={item.title} className='w-25 mb-3' />
                      <h5 className='fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              
              <Col lg='12' className='text-center'>
                <h2>Popular Foods</h2>
              </Col>

              <Col lg='12'>
                <div className="food_category">
                  <button onClick={()=>{setCategory('all')}} className={`all_btn ${category === 'all' ? 'cat_btn_active' : ''}`} >All</button>
                  <button onClick={()=>{setCategory('Burger')}} className={`cat_btn ${category === 'Burger' ? 'cat_btn_active' : ''}`} ><img src={CategoryImg01} alt="Burger" />Burger</button>
                  <button onClick={()=>{setCategory('Pizza')}} className={`cat_btn ${category === 'Pizza' ? 'cat_btn_active' : ''}`}><img src={CategoryImg02} alt="Pizza" />Pizza</button>
                  <button onClick={()=>{setCategory('Bread')}} className={`cat_btn ${category === 'Bread' ? 'cat_btn_active' : ''}`}><img src={CategoryImg03} alt="Bread" />Bread</button>
                </div>
              </Col>

              { allProducts.map((product, index) => (
                  <Col lg='3' md='4' sm='6' key={index} className='mt-5'>
                    <ProductCard product={product} />
                  </Col>
                )) }

            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <img src={WhyImg} alt="why_tasty_treat" className='w-100' />
              </Col>

              <Col lg='6' md='6'>
                <div className="why_tasty_treat">
                  <h2 className='tasty_treat_title mb-4'>why <span>tasty treat?</span></h2>

                  <p className='tasty_treat_desc mb-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sed molestiae quas a vel dolor, maiores eaque, culpa incidunt nihil quisquam earum aliquam blanditiis placeat soluta. Laboriosam eum sapiente dolor!</p>

                  <ListGroup className='mt-5'>
                    
                    <ListGroupItem className='border-0 ps-0 mb-1'>
                      <p className='tasty_treat_list_title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Fresh and tasty foods.</p>
                      <p className='tasty_treat_list_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nulla.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0 mb-1'>
                      <p className='tasty_treat_list_title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Quality support.</p>
                      <p className='tasty_treat_list_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nulla.</p>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 ps-0 mb-1'>
                      <p className='tasty_treat_list_title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Order from any location.</p>
                      <p className='tasty_treat_list_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nulla.</p>
                    </ListGroupItem>
                  
                  </ListGroup>

                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2>Hot Pizza</h2>
              </Col>

              { hotPizza.map((item, index) => (
                <Col lg='3' md='4' sm='6' key={index} className='mt-5'>
                  <ProductCard product={item} />
                </Col>
              )) }

            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="testimonial">
                  <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
                  <h2 className='testimonial_title mb-4'>what our <span>customers</span> are saying</h2>
                  <p className='testimonial_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellendus temporibus? Minima ex modi nisi hic soluta earum similique id.</p>
                  
                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg='6' md='6'>
                <img src={NetWorkingImg} alt="NetWorking" className='w-100' />
              </Col>
            </Row>
          </Container>
        </section>

      </Helmet>
    </>
  )
}

export default Home;
import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import products from '../assets/fake-data/products';
import ProductCart from '../components/UI/product-card/ProductCard';

const AllFoods = () => {
  return (
    <>
      <Helmet title='Foods' >
        <CommonSection title='All Foods' />

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='6'>
                <div className="search_widget">
                  <input type="text" placeholder="I'm looking for..." />
                  <span><i className='ri-search-line'></i></span>
                </div>
              </Col>
              
              <Col lg='6' md='6' sm='6'>
                <div className="sorting_widget">
                  <select>
                    <option>Default</option>
                    <option value="ascending">A-Z</option>
                    <option value="decending">Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
              </Col>

              {
                products.map((item, index)=> (
                  <Col lg='4' md='6' sm='6' key={index} className='mt-4' >
                    <ProductCart product={item} />
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default AllFoods
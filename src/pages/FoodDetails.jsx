import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  return (
    <>
      <Helmet title='Details' >
        <section>
          <Container>
            <Row>
              <Col>
                FoodDetails
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default FoodDetails
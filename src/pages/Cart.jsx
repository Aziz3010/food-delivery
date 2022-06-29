import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const Cart = () => {
  return (
    <>
      <Helmet title='Cart' >
        <section>
          <Container>
            <Row>
              <Col>
                Cart
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Cart
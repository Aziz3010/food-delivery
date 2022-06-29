import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const Checkout = () => {
  return (
    <>
      <Helmet title='Checkout' >
        <section>
          <Container>
            <Row>
              <Col>
                Checkout
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Checkout
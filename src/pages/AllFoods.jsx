import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const AllFoods = () => {
  return (
    <>
      <Helmet title='Foods' >
        <section>
          <Container>
            <Row>
              <Col>
                Foods
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default AllFoods
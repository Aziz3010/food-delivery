import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <>
      <Helmet title='Contact' >
        <section>
          <Container>
            <Row>
              <Col>
                Contact
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Contact;
import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const Register = () => {
  return (
    <>
      <Helmet title='Register' >
        <section>
          <Container>
            <Row>
              <Col>
                Register
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Register
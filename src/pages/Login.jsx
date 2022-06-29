import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

const Login = () => {
  return (
    <>
      <Helmet title='Login' >
        <section>
          <Container>
            <Row>
              <Col>
                Login
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Login
import React, { useRef } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonSection from '../components/UI/common-section/CommonSection';

const Register = () => {
  const registerFullNameRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Signup");
  }

  return (
    <>
      <Helmet title='Signup' >
        <CommonSection title='Signup' />

        <section>
          <Container>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <form onSubmit={submitHandler} className='form'>
                  <div className="form_group">
                    <input type="text" required placeholder='Full Name' ref={registerFullNameRef} />
                  </div>
                  <div className="form_group">
                    <input type="email" required placeholder='Email' ref={registerEmailRef} />
                  </div>
                  <div className="form_group">
                    <input type="password" required placeholder='Password' ref={registerPasswordRef} />
                  </div>
                  <button type='submit' className='addToCart_btn'>Signup</button>
                  <p className='m-0 mt-3'>Already have an account? <Link className='text-primary' to='/login'>Login now</Link></p>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Register
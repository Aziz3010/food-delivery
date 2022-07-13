import React, {useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Link } from 'react-router-dom';

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login");
  }

  return (
    <>
      <Helmet title='Login' >
        <CommonSection title='Login'/>
        <section>
          <Container>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <form onSubmit={submitHandler} className='form'>
                  <div className="form_group">
                    <input type="email" required placeholder='Email' ref={loginEmailRef} />
                  </div>
                  <div className="form_group">
                    <input type="password" required placeholder='Password' ref={loginPasswordRef} />
                  </div>
                  <button type='submit' className='addToCart_btn'>Login</button>
                  <p className='m-0 mt-3'>Don't have an account? <Link className='text-primary' to='/register'>Signup now</Link></p>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Login
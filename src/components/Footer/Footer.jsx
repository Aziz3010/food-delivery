import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        {/* Logo */}
        <Col lg='3' md='4' sm='6'>
          <div className="footer_logo text-start">
            <img src={logo} alt="res-logo" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolore?</p>
          </div>
        </Col>
        {/* Delivery Time */}
        <Col lg='3' md='4' sm='6'>
          <h5 className='footer_title'>Delivery Time</h5>
          <ListGroup className='delivery_time_list'>
            <ListGroupItem className='delivery_time_item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p className='m-0'>10:00am - 11:00pm</p>
            </ListGroupItem>
            <ListGroupItem className='delivery_time_item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p className='m-0'>Off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        {/* Contact */}
        <Col lg='3' md='4' sm='6'>
        <h5 className='footer_title'>Contact</h5>
          <ListGroup className='delivery_time_list'>
            <ListGroupItem className='delivery_time_item border-0 ps-0'>
              <p>Location: 22 Orabi St, Giza - Egypt</p>
            </ListGroupItem>
            <ListGroupItem className='delivery_time_item border-0 ps-0'>
              <p>Phone: +20 000 1111 222</p>
            </ListGroupItem>
            <ListGroupItem className='delivery_time_item border-0 ps-0'>
              <p>Email: username@example.com</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        {/* Newsletter */}
        <Col lg='3' md='4' sm='6'>
          <h5 className='footer_title'>Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
            <input type='email' placeholder='Enter your email' />
            <span>
              <i className="ri-send-plane-line"></i>
            </span>
          </div>
        </Col>
      </Row>
      {/* Copyright */}
      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright_text'>Copyright © - 2022, website made by Ahmed abdelaziz. All Rights Reserved.</p>
        </Col>

        <Col lg='6' md='6'>
          <div className="social_media d-flex gap-4 align-items-center justify-content-end">
            <p className='m-0'>Follow:</p>
            
            <span><Link to='https://www.facebook.com/'><i className="ri-facebook-line"></i></Link></span>
            
            <span><Link to='https://github.com/'><i className="ri-github-line"></i></Link></span>
            
            <span><Link to='https://www.linkedin.com/'><i className="ri-linkedin-line"></i></Link></span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;
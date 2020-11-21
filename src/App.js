import React from 'react';
import Hero from './Hero';
import Login from './Login';
import { Container, Row, Col } from 'react-bootstrap';
import Signup from './Signup';

export default () => (
  <div className='app-container'>
    <Container>
      <Row>
        <Col lg={7}>
          <Hero />
        </Col>
        <Col lg={5}>
          <h1 className="text-center">LOGIN PAGE</h1>
          <Login />
          <h1 className="text-center">Sign UP PAGE</h1>
          <Signup/>
        </Col>
      </Row>
    </Container>
  </div>
);

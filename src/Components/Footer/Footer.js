import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import footer_image1 from '../../Images/footer_image1.png';


export default class Header extends Component {
   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <img src={ footer_image1 } />
               </Col>

               <Col>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
               </Col>

               <Col>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
               </Col>

               <Col>
                  <h3>Newsletter Subscription</h3>
                  <Form>
                     <FormGroup>
                        <Input type="text" placeholder="email address" />
                     </FormGroup>
                  </Form>
               </Col>
            </Row>
            <Row>
               <Col>.col</Col>
            </Row>
         </Container>
      )
   }
}

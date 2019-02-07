import React, { Component } from "react";
import "./footer.css";
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import footer_image1 from '../../Images/footer_image1.png';


export default class Header extends Component {
   render() {
      return (
         <div class="footer">
            <Container>
               <Row>
                  <Col>
                     <img src={ footer_image1 } />
                  </Col>

                  <Col>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                  </Col>

                  <Col>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                     <p><a href="">Lorem Ipsum</a></p>
                  </Col>

                  <Col>
                     <h4><u>Newsletter Subscription</u></h4>
                     <Form>
                        <FormGroup>
                           <Input id="form_input" type="text" placeholder="email address" />
                        </FormGroup>
                     </Form>
                     <Button outline color="secondary">Submit</Button>{' '}
                  </Col>
               </Row>
               <br/>
               <Row id="footer_copyright">
                  <Col sm="12" md={{ size: 6, offset: 3 }}><p>Copyright © 2019 IPQ || Design & Development By IPQ Technologies</p></Col>
               </Row>
            </Container>
         </div>
      )
   }
}

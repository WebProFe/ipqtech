import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Introduction = (props) =>{
        return (
            <Container fluid >
                <Row className="paragraph">
                    <Col xs="12" md="6" className="intro-paragraph">
                    <p>Helping our clients to have a strong internet prescence in order to promote their business values</p>
                    </Col>
                    <Col xs="12" md="6" className="about-us">
                    <h2>What we do</h2>
                    <p>We specialize in building custom websites for business who are looking to have an influential prescense in the internet</p>
                    </Col>
                </Row>
            </Container>
        )
}
export default Introduction;
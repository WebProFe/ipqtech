import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Home.css';
import{ ipqLogo } from '../../Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = (props) =>{
        return (
            <Container fluid className="header-container">
                <Row className="header-item">
                    <div className="item-company-name">
                        <img src={ipqLogo} alt="ipq-logo" />
                    </div>
                </Row>
                <Row className="header-item">
                    <div className="header-item-work">
                        <h3>Our Work</h3>
                    </div>
                </Row>
                <Row className="header-item">
                    <div className="item-arrow">
                        <FontAwesomeIcon icon="level-down-alt" color="#24A1DA" size="3x"/>
                    </div>
                </Row>
            </Container>
        )
}
export default Header;
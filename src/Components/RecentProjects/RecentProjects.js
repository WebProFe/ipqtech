import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RecentProjects.css';
import ProjectCard from './ProjectCard';
import TopNotch from '../../Images/topnotch.png';
import Toledo from '../../Images/toledo.png'

class RecentProjects extends Component {

    render(){
        return(
            <Container fluid className="projects-container">
                <h1  className="line-title">Our Most Recent Work</h1>
                <Row>
                    <Col lg="4">
                        <ProjectCard
                        title="Top Notch"
                        subtitle="Carpentry Services"
                        websiteImage={TopNotch}
                        websiteDescription="Top Notch is a construction company serving the Austin area"
                        link="http://topnotchcarpenters.com/"
                        buttonColor="warning"
                        />
                    </Col>
                    <Col lg="4">
                        <ProjectCard
                        title="Colegio Toledo"
                        subtitle="Middle School"
                        websiteImage={Toledo}
                        websiteDescription="Toledo is a bilingual education school in Mexico"
                        link="http://topnotchcarpenters.com/"
                        buttonColor="primary"
                        />
                    </Col>
                    <Col lg="4">
                        <ProjectCard
                        title="Top Notch"
                        subtitle="Carpentry Services"
                        websiteImage={TopNotch}
                        websiteDescription="Top Notch is a construction company serving the Austin area"
                        link="http://topnotchcarpenters.com/"
                        buttonColor="warning"
                        />
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default RecentProjects;
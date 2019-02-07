import React, { Component } from "react";
import { Container } from 'reactstrap';
import ServicesList from '../Services/ServicesList'

class Services extends Component {
    render(){
        return(
            <Container>
                <ServicesList />
            </Container>
        )
    }
}

export default Services;
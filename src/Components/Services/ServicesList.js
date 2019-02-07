import React, {Component} from 'react';
import './Services.css'
import SeoService from './SeoService';
import {Container} from 'reactstrap';

class ServicesList extends Component{

    render(){
        return(
            <Container>
                <SeoService />
            </Container>
        )
    }

}

export default ServicesList;
import React, {Component} from "react";
import "./Particles.css"
import IntroBanner from "./IntroBanner";

class ParticleSection extends Component{

    render(){
        return(
            <div className="hero-image">
                <IntroBanner/>
                <div className="hero-cover">
                    <div className="text-block">
                        <h1>Innovation in Program Quality</h1>
                        <h4>Always looking for projects</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default ParticleSection;
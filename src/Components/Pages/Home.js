import React, { Component } from "react";
import ParticleSection from "../ParticleSection/ParticleSection";
import RecentProjects from "../RecentProjects/RecentProjects";

class Home extends Component {
    render(){
        return(
            <div>
                <ParticleSection />
                <RecentProjects />
            </div>
        )
    }
}

export default Home;
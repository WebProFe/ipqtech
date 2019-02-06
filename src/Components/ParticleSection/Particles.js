import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Particles.css'
 
class ParticleSection extends Component{
  
    render(){
        return (
            <div className="particles">

            <Particles
            params={{
              particles: {
                number: {
                  value: 20,
                  density: {
                    enable: true,
                    value_area: 6000
                  }
                },
                color: {
                  value: "#42f474"
                },
                shape: {
                  type: "circle",
                  polygon: {
                    nb_sides: 4
                  }
                },
                opacity: {
                  value: 0.4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 20,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 0,
                  color: "#000000",
                  opacity: 0.3687847739990702,
                  width: 0.6413648243462091
                },
                move: {
                  enable: true,
                  speed: 5,
                  direction: "top",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "bubble"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
          </div>
        );
    };
 
}

export default ParticleSection;
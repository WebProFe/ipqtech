import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Particles.css'
import data from '../../Images/ipqLogo1.png'
import css from '../../Images/css-icon.png'
import code from '../../Images/code-icon.png'
import ecommerce from '../../Images/ecommerce-icon.png'
import js from '../../Images/js-icon.png'
 
class ParticleSection extends Component{
  
    render(){
        return (
            <div className="particles">

            <Particles
            params={{
              particles: {
                number: {
                  value: 3,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#42f474"
                },
                shape: {
                  type:
                    "images",
                images: [
	                {
	                    src: `${data}`,
	                    height: 800,
	                    width: 830
                    },
                    {
	                    src: `${css}`,
	                    height: 800,
	                    width: 830
                    },
                    {
	                    src: `${code}`,
	                    height: 800,
	                    width: 830
                    },
                    {
	                    src: `${ecommerce}`,
	                    height: 800,
	                    width: 830
                    },
                    {
	                    src: `${js}`,
	                    height: 800,
	                    width: 830
	                }
                    
	            ]
                },
                // opacity: {
                //   value: 0.4,
                //   random: true,
                //   anim: {
                //     enable: true,
                //     speed: 1,
                //     opacity_min: 0.1,
                //     sync: false
                //   }
                // },
                size: {
                  value: 40,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 4,
                    size_min: 10,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 0,
                  color: "#ffffff",
                  opacity: 1,
                  width: 0.01
                },
                move: {
                  enable: true,
                  speed: 2,
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
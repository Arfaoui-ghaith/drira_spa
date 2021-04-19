import React, { Component } from 'react';
import axios from 'axios'
// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Multipurpose/about-us';
import Features from './SubPages/Multipurpose/features';
import Services from './SubPages/Multipurpose/services';
import Cta from './SubPages/Multipurpose/cta';
import Team from './SubPages/Multipurpose/team';
import Landings from './SubPages/Multipurpose/landings'
import Client from './SubPages/Multipurpose/client';
import Contact from './SubPages/Multipurpose/contact';
import '../css/pe-icon-7.css';

import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class homeBusiness extends Component {

    state = {
        activeIndex: 0,
    }

    state = {
        landings: []
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    fetchLandings = async () => {
        try{
             const url ='https://spnetwork.herokuapp.com/api/v1/landings/';
             const res = await axios({
                   method: 'get',
                   url,
             });
             
             this.setState({ landings: res.data.landings });
             
         } catch(err){
             console.log(err);
         }       
    };
   

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        this.fetchLandings();
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('nav-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
        }
    }

    render() {
        

        console.log(this.state.landings)
        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="home-slider" id="home">
                    <div className="container-fluid">
                        <div className="row">

                            <RBCarousel
                                version={4}
                                autoplay={this.state.autoplay}
                                pauseOnVisibility={true}
                                onSelect={this.visiableOnSelect}
                                slideshowSpeed={4000}
                            >
                                {
                                    this.state.landings.map((landing, index) => (
                                        <Landings key={index} landing={landing} />
                                    ))
                                }

                            </RBCarousel>

                        </div>
                    </div>
                </section>

                <AboutUs />
                <Features />
                <Services />
                <Cta />
                
                <Team />
                
                <Client />
                <Contact />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;



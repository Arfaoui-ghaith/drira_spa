import React, { Component } from 'react';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
               <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="title text-center mb-5">
                        
                            <h3>About Us</h3>
                            <p className="text-muted mt-3">SPNetwork is a company providing services in Web, network and telecommunications solutions. We support businesses of all sizes across a wide range of industries.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-exapnd2 text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Intervention</h5>
                                <p className="text-muted">Intervenes according to your wishes or needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-clock text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Time</h5>
                                <p className="text-muted">From ½ day to 6 days per week.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-monitor text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Availability</h5>
                                <p className="text-muted">Our interventions are also on demand for specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;



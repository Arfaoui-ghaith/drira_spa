import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../images/team/img-1.jpg';
import img2 from '../../../images/team/img-2.jpg';
import img3 from '../../../images/team/img-3.jpg';
import img4 from '../../../images/team/img-4.jpg';

export default function Team() {


        return (
            <React.Fragment>
                <section className="section bg-light" id="equipe">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Equipe</p>
                                    <h3>Notre Equipe</h3>
                                    <p className="text-muted mt-3">SPNetwork est doté d’équipes professionnelles donnant chaque jour le meilleur d’eux-mêmes pour donner entière satisfaction à notre clientèle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-box bg-white mt-4">
                                    <div className="team-img">
                                        <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="team-content text-center p-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Kenneth Simpson</Link></h5>
                                        <p className="mb-0 text-custom f-14">CEO/Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-box bg-white mt-4">
                                    <div className="team-img">
                                        <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="team-content text-center p-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Daniel Malave</Link></h5>
                                        <p className="mb-0 text-custom f-14">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-box bg-white mt-4">
                                    <div className="team-img">
                                        <img src={img3} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="team-content text-center p-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">James Peck</Link></h5>
                                        <p className="mb-0 text-custom f-14">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-box bg-white mt-4">
                                    <div className="team-img">
                                        <img src={img4} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="team-content text-center p-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Marc Johnson</Link></h5>
                                        <p className="mb-0 text-custom f-14">Web Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment >
        );
}



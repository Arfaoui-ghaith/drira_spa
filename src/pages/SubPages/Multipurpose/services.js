import React from 'react';

export default function Services() {

        return (
            <React.Fragment>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Services</p>
                                    <h3>Ce Que Nous Faisons</h3>
                                    <p className="text-muted mt-3">Nous sommes à votre entière disposition pour vous apporter les solutions nécessaires.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-news-paper text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Contrats</h5>
                                        <p className="text-muted">Proposition d'une large gamme de contrats d’infogérance sur mesure.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-notebook text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Spécialistes</h5>
                                        <p className="text-muted">Des spécialistes à votre disposition.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-mouse text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Stratégie</h5>
                                        <p className="text-muted">Des interventions à distance (Remote).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-mail-open-file text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Joignabilité</h5>
                                        <p className="text-muted">Le client fait librement appel à Société.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-network text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Télémaintenance</h5>
                                        <p className="text-muted">Interventions via la télémaintenance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-upload text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Disponibilité</h5>
                                        <p className="text-muted">Une Ressource disponible les jours ouvrés de 9h à 18h.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
}



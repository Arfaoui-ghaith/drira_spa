import React from 'react';

export default function AboutUs() {

        return (
            <React.Fragment>
                <section className="section" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <h3>A Propos De Nous</h3>
                                    <p className="text-muted mt-3">SPNetwork est une compagnie prestataire de services en solutions Web, réseau et télécommunications. Nous soutenons des entreprises de toutes tailles dans un large éventail de secteur.</p>
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
                                        <p className="text-muted">Intervient en fonction de Vos souhaits ou vos besoin.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="about-box text-center p-4">
                                    <div className="about-icon mb-3">
                                        <i className="pe-7s-clock text-custom h1"></i>
                                    </div>
                                    <div className="about-desc">
                                        <h5 className="mb-3 f-18">Temps</h5>
                                        <p className="text-muted">D'une ½ journée à 6 journées par semaine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="about-box text-center p-4">
                                    <div className="about-icon mb-3">
                                        <i className="pe-7s-study text-custom h1"></i>
                                    </div>
                                    <div className="about-desc">
                                        <h5 className="mb-3 f-18">Disponibilité</h5>
                                        <p className="text-muted">Nos intervenants également sont à la demande pour des besoins ponctuels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
}



import React from 'react';
import img2 from '../../../images/features/img-2.png';

export default function Features() {
    
    return (
        <React.Fragment>
                <section className="section bg-custom3" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-white mb-2 f-13 subtitle">Avantages</p>
                                    <h3 style={{ "color": "white" }}>Nos Avantages Client</h3>
                                    <p className="text-white mt-3">Ci dessous nous citons les nombreux avantages que vous <br/> pouvez trouvé dans notre site :</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="row vertical-content mt-5">
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feautures-content p-5">
                                    <div>
                                        <div>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Un gain d’expertise et de temps.</p>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Un budget établi, prévisionnel et constant.</p>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Une gestion optimisée de votre informatique.</p>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Un passage préventif systématique dans votre entreprise.</p>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Un ingénieur informaticien diplômé et certifié.</p>
                                            <p className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Une gestion optimisée de votre informatique.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </React.Fragment >
    )
}



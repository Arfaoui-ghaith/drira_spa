import React from 'react'
import BhB1 from '../../../images/bg-home-business-1.jpg';

export default function landings({ landing }) {
    return (
        
                                <div className="item">
                                    <div className="carousel-item active" style={{ backgroundImage: `url(http://51.38.227.52/images/landings/${landing.image})` }}>
                                        <div className="bg-overlay"></div>
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="busi-home-title text-white text-center">
                                                                <h1 className="animated fadeInDownBig animation-delay-1 mb-4">{landing.title}</h1>
                                                                <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">It is a long established fact that a reader will be distracted by the readable content of a page at its layout. The point of using Lorem normal distribution of letters</p>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
    )
}

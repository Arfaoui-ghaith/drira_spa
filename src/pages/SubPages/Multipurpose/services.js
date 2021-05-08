import React from 'react';
import axios from 'axios';
export default function Services() {

    const [services, setServices] = React.useState([]);

    const fetchServices = async () => {
        try{
            const url ='http://51.38.227.52/api/v1/services/';
            const res = await axios({
                  method: 'get',
                  url,
            });
            
            setServices(res.data.services);
            
        } catch(err){
            console.log(err);
        } 
    }

    React.useEffect(() => {
        fetchServices();
    },[]);

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
                            {
                                services.map((service,index) => (
                                    <div className="col-lg-4">
                                        <div className="services-box p-4">
                                            <div className="services-icon mb-3">
                                                <i className={`${service.icon} text-custom h1`}></i>
                                            </div>
                                            <div className="services-desc">
                                                <h5 className="mb-3 f-18">{service.title}</h5>
                                                <p className="text-muted">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                           
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
}



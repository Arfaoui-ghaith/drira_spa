import React from 'react';
import axios from 'axios';
// Import Images


export default function Client() {

    const [partners, setPartners] = React.useState([]);

    const fetchPartners = async () => {
        try{
            const url ='http://51.38.227.52/api/v1/partners/';
            const res = await axios({
                  method: 'get',
                  url,
            });
            
            setPartners(res.data.partners);
            
        } catch(err){
            console.log(err);
        } 
    }

    React.useEffect(() => {
        fetchPartners();
    },[]);

        return (
            <React.Fragment>
                <section className="section bg-light">
                    <div className="container" id="partners">
                    <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Partenaires</p>
                                    <h3>Nos Partenaires</h3>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                partners.map((partner,index) => (
                                    <div className="col-lg-3">
                                        <div className="client-images">
                                            <img src={`http://51.38.227.52/images/partners/${partner.image}`} alt="logo-img" className="mx-auto img-fluid d-block" />
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



import React from 'react';
import img2 from '../../../images/features/img-2.png';
import axios from 'axios';

export default function Features() {

    const [features, setFeatures] = React.useState([]);

    const fetchFeatures = async () => {
        try{
            const url ='http://51.38.227.52/api/v1/features/';
            const res = await axios({
                  method: 'get',
                  url,
            });
            
            setFeatures(res.data.features);
            
        } catch(err){
            console.log(err);
        } 
    }

    React.useEffect(() => {
        fetchFeatures();
    },[]);
    
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
                                            {
                                                features.map((feature,index) => (
                                                    <p key={index} className="text-white"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>{feature.title}</p>
                                                ))
                                            }
                                           
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



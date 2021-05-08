import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Team() {

    const [members, setMembers] = React.useState([]);

    const fetchMembers = async () => {
        try{
            const url ='http://51.38.227.52/api/v1/team/';
            const res = await axios({
                  method: 'get',
                  url,
            });
            
            setMembers(res.data.members);
            
        } catch(err){
            console.log(err);
        } 
    }

    React.useEffect(() => {
        fetchMembers();
    },[]);

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
                            {
                                members.map((member,index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div className="team-box bg-white mt-4">
                                            <div className="team-img">
                                                <img src={`http://51.38.227.52/images/members/${member.image}`} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                            <div className="team-content text-center p-3">
                                                <h5 className="team-name f-17"><Link to="#" className="text-dark">{`${member.last_name} ${member.first_name}`}</Link></h5>
                                                <p className="mb-0 text-custom f-14">{member.title}</p>
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



import React, { Component } from 'react';

class Cta extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
               <section className="section bg-custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cta-content text-center text-white">
                            <h3 className="mb-4">“SPNetwork… your development partner.”</h3>
                            <p className="text-light f-16">—M.Drira</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment >
        );
    }
}

export default Cta;



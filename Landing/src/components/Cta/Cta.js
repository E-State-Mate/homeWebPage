import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <React.Fragment>
            <section className="section bg-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-cebter">
                                <h2 className="text-white text-center">Work with EStateMate today</h2>
                                <p className=" text-white text-center mt-3">Share with our team your tech needs and let's get started!</p>
                                <div className="text-center mt-4">
                                    <Link to="#" className="btn btn-primary mt-2">THIS WILL BE THE CRUD FORM</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </React.Fragment>
    )
}

export default CTA;
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <React.Fragment>
            <section className="section bg-cta">
                <div className=""></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2 className="text-white text-center">Work with EStateMate today</h2>
                                <p className=" text-white text-center mt-3">Share with our team your tech needs and let's get started!</p>
                                <div className="text-center mt-4">
                                    <Link to="inquire" className="btn btn-primary mt-2">Get a Quote Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </React.Fragment>
    )
}

export default CallToAction;
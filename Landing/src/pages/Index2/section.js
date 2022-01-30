import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useState } from 'react';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

function Section() {
    const [isOpen, setIsOpen]= useState(false)
    
    // constructor() {
    //     super();
    //     this.state = {
    //         isOpen: false
    //     }
    //     this.callModal.bind(this) // what is this for?
    // }

    const callModal = () => {
        this.refs.child.openModal(); // TODO: figure out how to change to function 
    }
    
    
    return (
        <React.Fragment>
        <section className="bg-home home-half" id="home">
            <div className="bg-overlay"></div>
            <div className="home-center">
                <div className="home-desc-center">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <div className="home-content text-white">
                                    <div className="watch-video mt-5">
                                    <Link onClick={this.callModal} to="#" className="video-play-icon-trigger text-white">
                                            <i className="mdi mdi-play play-icon-circle play play-icon f-30"></i>
                                        </Link>
                                    </div>
                                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">E-StateMates Services LLC</h5>
                                    <h1 className="title mt-4 text-white text-uppercase">Statement <br/>Here</h1>
                                    <div className="pt-4 mt-1">
                                        <Link to="#" className="btn btn-outline-white mt-2 mr-3">Get Started</Link>
                                        <Link to="#" className="btn btn-primary ml-1 mt-2">Purchase Now</Link>
                                    </div>
                                </div>
    
    
                                
                                
                            </Col>
                        </Row>
                    </Container>
                    {/* Render ModalSection Component for Modal */}
                    <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                    {/* Modal section connected to js file, also in class component format */}
                </div>
            </div>
        </section>
        </React.Fragment>
    )}

export default Section;
import React from 'react';
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { addContact } from '../../lib/contact.js'

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import map from "../../assets/images/features/map.png";

const GetInTouch = () => {

    const handleSubmit = async (event, errors, values) => {
        console.log(values)
        await addContact(values);
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('organization').value = "";
        document.getElementById('message').value = "";
    }

    return (
        <React.Fragment>
            <section className="section" id="contact">
                <Container>
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Contact"
                    desc="How can we help you change your world? Share a message, a services request or praise on the amazing work done by our team. We look forward to hearing from you!"
                />
                    <Row className="mt-5 pt-2">
                        <Col lg={5}>
                            <div className="contact-info">
                                <div style={{backgroundImage: `url(${map})`, backgroundRepeat : "no-repeat"}} >

                                    <Media>
                                        <i className="mdi mdi-map-marker text-primary h4"></i>
                                        <Media body className=" ml-4">
                                            <p className="text-muted">7600 Doctor Phillips Boulevard
                                                <br/>Orlando, FL 32819</p>
                                        </Media>
                                    </Media>

                                    {/* <Media className="mt-4">
                                        <i className="mdi mdi-phone text-primary h4"></i>
                                        <Media body className="ml-4">
                                            <p className="text-muted">Sales: +1 (407) 555-5555
                                                <br/>Support: +1 (407) 555-5555</p>
                                        </Media>
                                    </Media>

                                    <Media className="media mt-4">
                                        <i className="mdi mdi-calendar-clock text-primary h4"></i>
                                        <Media body className="ml-4">
                                            <p className="text-muted">Weekdays: 9:00-19:00
                                                <br/>Saturday-Sunday: On request</p>
                                        </Media>
                                    </Media> */}

                                    <Media className="media mt-4">
                                        <i className="mdi mdi-email text-primary h4"></i>
                                        <Media body className="ml-4">
                                            <p className="text-muted">contact@estatemateservices.com</p>
                                        </Media>
                                    </Media>

                                </div>

                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="custom-form">
                                <div id="message"></div>
                                <AvForm name="contact-form" id="contact-form" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup className="mt-3">
                                            <AvField
                                                name="firstName"
                                                id="firstName"
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                                errorMessage="First Name"
                                                validate={{ required: { value: true } }}
                                            />
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup className="mt-3">
                                            <AvField
                                                name="lastName"
                                                id="lastName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Last name"
                                                errorMessage="Last Name"
                                                validate={{ required: { value: true } }}
                                            />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup className="mt-3">
                                            <AvField
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Your email"
                                                errorMessage="Enter Your email"
                                                validate={{
                                                    required: { value: true },
                                                    email: { value: true }
                                                }}
                                            />
                                            </FormGroup>
                                        </Col>

                                        <Col lg={6}>
                                            <FormGroup className="mt-3">
                                            <AvField
                                                name="phone"
                                                id="phone"
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone number"
                                                errorMessage="Enter Your Phone number"
                                                validate={{
                                                    required: { value: true },
                                                }}
                                            />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <FormGroup className="mt-3">
                                                <AvField
                                                    name="organization"
                                                    id="organization"
                                                    type="tex0t"
                                                    className="form-control"
                                                    placeholder="Company (if any)"
                                                    errorMessage="Enter Your Phone number"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <FormGroup className="mt-3">
                                                <AvField
                                                    name="message"
                                                    id="message"
                                                    type="textarea"
                                                    className="form-control"
                                                    placeholder="Enter message"
                                                    errorMessage="Please enter a message"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            <div className="mt-3">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Send Message"/>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
        </React.Fragment>
    )
}

export default GetInTouch;
import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes : [
                { id : "01", title : "Site Mapping", desc : " Our firm will walk you you walk you through the site architure that best suits your needs." },
                { id : "02", title : "Development", desc : "Every web project is assigned a lead devoloper who will manage the building process for you." },
                { id : "03", title : "Feedback", desc : "Our firm provides a minimum two consulations to for you to discuss any updates to your website." },
                { id : "04", title : "Deployment", desc : "We'll work through any challenges to get your website online and connect to your domain." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-progress section">
                    <div className="bg-overlay"></div>
                    <Container>
                    <SectionTitle
                        title="Web Dev Process"
                        desc="From start to finish our team is here for you."
                        isLight={true}
                    />

                        <Row className="mt-5 pt-2">
                            <ProcessBox processes={this.state.processes} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Process;
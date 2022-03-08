import React, { useState } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

const Process = () => {
    const [processes, setProcesses] = useState([
                { 
                    id : "01", 
                    title : "Site Mapping", 
                    desc : "Our firm will walk you through the site architecture process." 
                },
                { 
                    id : "02", 
                    title : "Development", 
                    desc : "Every web project is assigned a lead devoloper, who will manage the building process for you." 
                },
                { 
                    id : "03", 
                    title : "Feedback", 
                    desc : "Our firm provides a minimum two consulations for you to discuss any updates to your website." 
                },
                { 
                    id : "04", 
                    title : "Deployment", 
                    desc : "We'll work through any challenges to get your website online and connected to your domain." 
                },
            ])
    
    
    return (
        <React.Fragment>
            <section className="bg-progress section">
                <div className=""></div>
                <Container>
                <SectionTitle
                    title="Our Web Development Process"
                    // desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    isLight={true}
                />
                    <Row className="mt-5 pt-2">
                        <ProcessBox processes={processes} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
    
}

export default Process;
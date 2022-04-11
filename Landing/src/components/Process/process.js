import React, { useState } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

const Process = () => {
    const [processes, setProcesses] = useState([
                { 
                    id : "01", 
                    title : "Technology Consulting", 
                    desc : "Our in-house team orients your business towards scale by eliminating technical debt and unnecessary business expenses on unused technologies." 
                },
                { 
                    id : "02", 
                    title : "Web Development", 
                    desc : "Custom website solutions to stand out in your industry using our best-in-class web engineers." 
                },
                { 
                    id : "03", 
                    title : "Integration Experts", 
                    desc : "Interested in implementing a pre-built white-labelled solution? We can help you find the right tool for the job and do it for you." 
                },
                // { 
                //     id : "04", 
                //     title : "Custom App Creation", 
                //     desc : "Work with our team of designers and engineers to build out your vision and bring it to life!" 
                // },
                { 
                    id : "04", 
                    title : "Delivery & Support", 
                    desc : "After any deployment, we love to work with our clients on a long-term business to drive mutual success <3" 
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
import React, { useState } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";

const About = () => {
    const [data, setData] = useState(
        [
            // { icon : "mdi mdi-monitor", title : "Test Title 2", desc : "Hello world" },
            // { icon : "mdi mdi-nfc-variant", title : "Web Development", desc : "Let us make you a webpage tailored to your needs.", isLight : true },
            // { icon : "mdi mdi-lightbulb-on-outline", title : "Branding", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.-" },
        ]
    )
    return (
        <React.Fragment>
            <section className="section" id="about">
                <Container>
                    <SectionTitle
                        title="About"
                        // subtitle="WHO WE ARE?"
                        desc="E-StateMate is a technology firm primarly focused on modernizing the Real Estate industry. Let our web development firm create the perfect home page or web application for you."
                    />
                    <Row className="mt-5 pt-2">
                        <AboutBox data={data} />
                    </Row>
                </Container>
            </section>
            <BestSkills/>
        </React.Fragment>
    );
}

export default About;
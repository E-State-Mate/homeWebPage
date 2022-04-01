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
                        desc="We are on a mission to modernize the Real Estate Industry. Whether your organization needs an internal tech realignment, new website(s), integrating exciting new solutions or continued IT support, we have you. Contact us today to see how we can set you up for success!" 
                    />
                    <Row className="mt-5 pt-2">
                        <AboutBox data={data} />
                    </Row>
                </Container>
            </section>
            {/* <BestSkills/> */}
        </React.Fragment>
    );
}

export default About;
import React, { Component, useState } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/users/img-1.jpg";
import team2 from "../../assets/images/users/img-2.jpg";
import team3 from "../../assets/images/users/img-3.jpg";
import team4 from "../../assets/images/users/img-4.jpg";

function OurTeam () {
    const [members, setMembers] = useState([
        { 
            img : team1, 
            name : "Eddie Wideman", 
            post : "Head of Development", 
            desc : "Eddie Wideman is an entrepreneur and fullstack developer experienced with real estate management and web technologies. He oversees the technology and business development at E-StateMate to connect established industries with 21st century technology. " 
        },
        { 
            img : team2, 
            name : "Zach Zippit", 
            post : "Lead Project Manager", 
            desc : "Zach Tippit is an experienced engineer, business consultant and team leader with a passion for scalable solutions in the tech world.  Zach determines the weekly project goals and manages the fullstack team at E-StateMate. When he's not writing content for his site, he is designing metropoles in Cities: Skylines" 
        },
        { 
            img : team3, 
            name : "Larry Hovell", 
            post : "Lead UXUI Designer", 
            desc : "Larry Hovell is a multi-talented UX/UI designer with an extensive background in customer success. Larry manages the web design for technologies in development and all weWhen he is not obsessing over SaaS technology but all technological design, you can find him at the gym or traveling the world." 
        },
        { 
            img : team4, 
            name : "Sylvia Jung", 
            post : "Lead FrontEnd Developer", 
            desc : "Consequat conllis Vebulum ante ipsum primis faubus orci cubilia Curae." 
        },
    ])

        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                    <SectionTitle
                        title="Our Teams"
                        subtitle="Minds"
                        desc="Get to know our staff of tech profesionals"
                    />
                        <Row className="mt-5 pt-2">
                            <TeamBox members={members} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    
}

export default OurTeam;
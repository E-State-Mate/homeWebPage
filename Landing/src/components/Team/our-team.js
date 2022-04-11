import React, { useState } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/users/EddieWidemanHeadshot.jpg";
import team2 from "../../assets/images/users/zach.png";
import team3 from "../../assets/images/users/LarryHovellHeadshot2.png";
import team4 from "../../assets/images/users/sylvia.jpg";
import team5 from "../../assets/images/users/kalju.png";
import team6 from "../../assets/images/users/alejandro.jpg";
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
            desc : "Zach Tippit is an experienced engineer, business consultant and team leader with a passion for scalable solutions in the tech world.  Zach determines the weekly project goals and manages the fullstack team at E-StateMate. When he's not hammering out code or hopping on an airplane, he is designing metropoles in Cities: Skylines." 
        },
        { 
            img : team3, 
            name : "Larry Hovell", 
            post : "Lead UX/UI Designer", 
            desc : "Larry Hovell is a multi-talented UX/UI designer with an extensive background in customer success. Larry manages the web design for technologies in development. When he is not obsessing over SaaS technology or technological design, you can find him at the gym or traveling the world." 
        },
        { 
            img : team6, 
            name : "Alejandro Terra", 
            post : "Lead UX/UI Designer", 
            desc : "Alejandro is a multi-talented, business-minded designer that combines visual design skills, coding knowledge and research analysis to create impactful digital experiences. In addition to UX/UI design, Alejandro also works on creating award-winning custom signage." 
        },
        { 
            img : team4, 
            name : "Sylvia Jung", 
            post : "Lead Front-End Developer", 
            desc : "Sylvia Jung is a MERN stack developer with an extensive background in management and guest relations. She recently relocated to Miami to work in Web Development. Currently, she is supporting E-StateMate as Front-End Developer. During her down time, you can find Sylvia telling and laughing at her own dad jokes." 
        },
        { 
            img : team5, 
            name : "Kalju Nekvasil", 
            post : "Full Stack Developer", 
            desc : "Kalju Nekvasil is a full stack developer who builds and maintains MERN applications for clients. When he is not writing code for E-StateMate he can be found wrestling wildebeests in the Serengeti or hunting for lost treasure in the Amazon. " 
        },

    ])

        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                    <SectionTitle
                        title="Our Team"
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
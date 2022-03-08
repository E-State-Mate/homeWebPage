import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import ProgressBar from "./progressbar";
//Import Imaghes
import features1 from "../../assets/images/features/img-1.jpg";

const BestSkills = () => {
    const [skills,setSkills] = useState([
        { title : "Web Design", value : 99 },
        { title : "Development", value : 99 },
        // { title : "Branding", value : 40 },
        { title : "Code", value : 99 },
    ])

    useEffect(()=>{
        var ele = document.getElementsByClassName("progress-bar");
        for( var i=0; i< ele.length ; i++){
            ele[i].classList.add("rounded");
        }
    }, [])

    return (
        <React.Fragment>
        <section className="section bg-light">
            <Container>
                <Row className="vertical-content">
                    <Col lg="6" className="p-0">
                        <div className="skill-box bg-white p-4 rounded box-shadow">
                            <h5>Best Skills.</h5>
                            {/* <p className="text-muted">Our tech egineers offer a variety of skills to fit your needs</p> */}
                            <div className="skills">
                                <ProgressBar skills={skills} />
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className="p-0 about-img">
                        <img src={features1} className="img-fluid rounded box-shadow" alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}


export default BestSkills;
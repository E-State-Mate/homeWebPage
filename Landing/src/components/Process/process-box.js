import React from 'react';
import { Col } from "reactstrap";
import '../../assets/css/style.css'

const ProcessBox = (props) => {
    
    return (
        <React.Fragment>
            {
                props.processes.map((process, key) =>
                        <Col key={key} lg={3} className="florp">
                            <div className="text-center">
                                <div className="progress-count text-white mt-4">
                                    <h3>{process.id}</h3>
                                </div>
                                <div className="progress-content bg-white mt-5 rounded p-4">
                                    <h5 className="f-18">{process.title}</h5>
                                    <p className="text-muted mb-0">{process.desc}</p>
                                </div>
                            </div>
                        </Col>
                )
            }        
        </React.Fragment>
    );
    
}

export default ProcessBox;
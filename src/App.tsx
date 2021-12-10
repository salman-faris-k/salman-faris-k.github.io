import React from 'react';
import './App.scss';
import { Col, Container, Row } from "react-bootstrap";

function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='mainContainer'>
                        <div className='profileCard'>
                            <div className='coverPicture'/>
                            <div className='profilePicture'>
                                <div className='image'/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="foot-container">
            <div className="wrapper">
                <Row className="footer-row">
                    <Col xs={12} md={4} className="mb-4"> 
                        <div className="footer-column">
                            <h3 style={{fontWeight:'bolder'}}>Supreme New York</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="mb-4">
                        <div className="footer-column">
                        <h3 style={{color:'black'}}>Est.</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footer-column">
                        <h3 style={{fontWeight:'bolder'}}>1994</h3>
                         </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </footer>
    );
}
export default Footer;

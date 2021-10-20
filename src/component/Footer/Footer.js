import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        // Footer Section....
        <>
            <div className="footer-area bg-dark py-5">
                <Container>
                    <Row>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">


                            <div className="mt-2">
                                <p>21st Century is proud to employ a team of 50+ full-time employees – each with a specific field of expertise.</p>
                                <div className="location">
                                    <p>1460 Broadway
                                        <br /> New York, NY 10036</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content">
                                <h3>Our <span className="text-warning">Offices</span></h3>

                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content">
                                <h3 className="fs-19 text-uppercase fw-500">Quick <span className="text-warning">Links</span></h3>
                                <ListGroup>

                                    <Link to="/about">About Us</Link>
                                    <Link to="/all-services">Services</Link>

                                    <Link to="/blogs">Blogs</Link>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content">
                                <h3 className="fs-19 fw-500">SERVICES <span className="text-warning">AREA</span></h3>
                                <ul>
                                    <li>Personal / Companion Home Care</li>
                                    <li>Private Duty Skilled Home Health Care</li>
                                    <li>Medicare / Skilled Home Health Care</li>
                                    <li>Home Infusion Therapy</li>
                                    <li>Wound Care</li>
                                    <li>Hospice</li>
                                    <li>Pediatrics</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    );
};

export default Footer;
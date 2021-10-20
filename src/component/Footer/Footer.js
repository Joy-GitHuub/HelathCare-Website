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
                                <svg xmlns="http://www.w3.org/2000/svg" width="190" height="160" viewBox="0 0 255 198"
                                    fill="none">
                                    <path
                                        d="M159.5 0H205.5L206.5 8.5L208 11L206.5 13C206.167 14.3333 205.5 17.4 205.5 19C205.5 20.6 207.833 22 209 22.5L208.5 24.5C208.333 24.8333 208 26 208 28V31.5C208 33.5 207.5 33.5 206.5 34.5C205.5 35.5 203.5 39 204 42.5C204.5 46 204.5 47 205.5 47C206.3 47 206.5 53.3333 206.5 56.5C206.167 57.1667 205.1 58.9 203.5 60.5C201.9 62.1 202.5 63.5 203 64L204.5 64.5C204.667 64 205.1 62.8 205.5 62C206 61 206.5 61 208.5 63C210.5 65 208 97 208.5 101C209 105 205 117 203 120.5C201.4 123.3 200.667 149.667 200.5 162.5L202 164V166.5C202.167 166.667 202.1 167 200.5 167C198.5 167 195 170 195 170.5V172L197 173.5C197 174.167 196.9 175.7 196.5 176.5C196.1 177.3 195 178.167 194.5 178.5L190.5 181C191.333 182.167 193.3 183.8 194.5 181C195.7 178.2 196.667 179.833 197 181L198 179H201L203 177L205 178H213V177C215.833 176.667 222.3 176 225.5 176C229.5 176 237 172 237.5 170C237.9 168.4 239 167.333 239.5 167L242 168L239.5 170V172V175H242V173H246V175L252 172L255 173C252.167 174 246 176.2 244 177C242 177.8 234.167 182.333 230.5 184.5H225.5C223 186 216.6 189.2 211 190C205.4 190.8 204.667 191.667 205 192L201 193L199.5 190H197C197.667 191 198.6 193 197 193H187C185 193 184.5 191 184.5 193C184.5 195 182 196.5 180 197.5C178 198.5 176.5 197 177.5 196.5C178.3 196.1 179.5 192 180 190C181.5 190 184.7 188.9 185.5 184.5C186.5 179 189.5 175 190.5 174C191.5 173 188.5 164 185.5 164.5C182.5 165 189.5 172.5 187 173C184.5 173.5 169.5 162.5 165.5 160.5C162.3 158.9 161.833 157.5 162 157H157.5C155.667 155.5 152 151.8 152 149C152 146.2 150 140.5 149 138H145V134.5H142.5V132.5H0.5L1 121.5C1.33333 121.5 2.1 118.5 4.5 118.5C7.5 118.5 10 116 12.5 113C15 110 14.5 111.5 17 109.5C19.5 107.5 22 108 24.5 102C27 101.5 29.5 102 30.5 95.5C31.3 90.3 27.8333 90.3333 25.5 90C25 88.6667 23.3 83.1 24.5 79.5C26 75 26.5 76 39 73C51.5 70 64.5 74 69.5 77C74.5 80 75 77 79 77C83 77 90.5 77 96.5 74.5C100.941 72.6497 104.5 65 115 65.5C116.109 63.2217 112.441 51.5198 114 51C118.8 49.4 114 50 117.5 49.5L116.5 46.5L121 47L119.5 45L115.5 40L113 45L108.5 41C109.833 39.5 114.5 31.0385 126 27.5C132.5 25.5 131.49 25.2895 130 22.5C128.856 20.3566 137.322 12.3326 145.5 6H149L152 3L159.5 0Z"
                                        fill="url(#paint0_linear)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="1.1334e-06" y1="-2.28265e-07" x2="255" y2="198"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F37313"></stop>
                                            <stop offset="1" stopColor="#E42C2C"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-3 mb-lg-0">
                            <div className="footer-content">
                                <h3 className="fs-19 text-uppercase fw-500">Quick <span className="text-warning">Links</span></h3>
                                <ListGroup>
                                    <Link>Why HealthCare</Link>
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
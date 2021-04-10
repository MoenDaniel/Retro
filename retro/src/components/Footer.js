import React from 'react';
import { Link, Router } from 'react-router-dom';
import { Nav, Row, Col } from 'react-bootstrap';
import './style/Footer.css';

{/*Footer med to rader som kan tilpasses fler rader ved behov*/}
export const Footer = () => {
    return (
        <footer>
            <Row>
                <Col xs={ 12 } sm={ 9 }>
                    <img id="logo" src={ require("../assets/images/logo-footer.png").default } alt="Footer logo"/>
                    <br/>
                    <br/>
                    <p>
                        2020 &copy; All rights reserved <br/>
                        All trademarks are the property of their respective owners.
                    </p>
                </Col>
                <Col xs={ 12 } sm={ 3 }>
                    <article>
                        <p id="footer-header">Connect</p>
                        <a href="#">Facebook</a> <br/>
                        <a href="#">Instagram</a> <br/>
                        <a href="#">Twitter</a>
                    </article>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;
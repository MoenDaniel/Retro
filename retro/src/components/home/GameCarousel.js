import React from 'react';
import { Carousel } from 'react-bootstrap';

{/*Karuseller for å vise in-game bilder fra spill. Bildene er hardkodet da de ikke er ment til å byttes/endres. 
Karusellen skifter bilde med fem sekunders intervaller*/}
const GameCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={5000}>
                <img class="carousel-img" src={ require("../../assets/images/carousel1.jpg").default} alt="header"/>
                
                <Carousel.Caption>
                <h2 id="carousel-header">Crash Bandicoot</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img class="carousel-img" src={ require("../../assets/images/carousel2.jpg").default} alt="header"/>

                <Carousel.Caption>
                <h2 id="carousel-header">Rayman</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img class="carousel-img" src={ require("../../assets/images/carousel3.jpg").default} alt="header"/>

                <Carousel.Caption>
                <h2 id="carousel-header">Tekken 3</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img class="carousel-img" src={ require("../../assets/images/carousel4.jpg").default} alt="header"/>

                <Carousel.Caption>
                <h2 id="carousel-header">Spyro the Dragon</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img class="carousel-img" src={ require("../../assets/images/carousel5.jpg").default} alt="header"/>

                <Carousel.Caption>
                <h2 id="carousel-header">Gran Turismo</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default GameCarousel;
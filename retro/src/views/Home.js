import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import GameCarousel from '../components/home/GameCarousel';
import HomeBanner from '../components/home/HomeBanner';
import LibraryList from '../components/library/LibraryList';
import { GameProvider } from '../contexts/GameContext'; 

import { Row, Col, Nav } from 'react-bootstrap';

import './style/Home.css';

export const Home = () => {
    return (
        <div id="home-container">
            <Row>
                <Col xs={ 12 } >
                    <HomeHeader/>
                </Col>
            </Row>

            <Row>
                <Col xs={ 12 } >
                    <GameCarousel/>
                </Col>
            </Row>

            <Row>
                <Col xs={ 12 } >
                    <HomeBanner/>
                </Col>
            </Row>

            <Row>
                <Col xs={ 12 }>
                    <GameProvider>
                        <LibraryList/>
                    </GameProvider>
                </Col>
            </Row>

        </div>
    )
}
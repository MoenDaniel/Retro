import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';

import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { GameProvider } from '../contexts/GameContext';
import { CharacterProvider } from '../contexts/CharacterContext';

import AdminGameList from '../components/admin/game/AdminGameList';
import GameList from '../components/games/GameList';
import CreateGame from '../components/admin/game/CreateGame';
import GameUpdate from '../components/admin/game/GameUpdate'; 
import DeleteGames from '../components/admin/game/DeleteGames';

import AdminCharacterList from '../components/admin/character/AdminCharacterList';
import CharacterList from '../components/character/CharacterList';
import CreateCharacter from '../components/admin/character/CreateCharacter';
import CharacterUpdate from '../components/admin/character/CharacterUpdate'; 
import DeleteCharacter from '../components/admin/character/DeleteCharacter';


import './style/Admin.css';

export const Admin = () => {

    let { url, path } = useRouteMatch();

    return (
        <BrowserRouter>
            <Row>
                <Col>
                    <section id="admin-header">
                        <h2>Administratorpanel</h2>
                    </section>

                    <Navbar id="admin-navbar" variant="dark">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link as={ Link } to={`${url}/upload-game`}>Upload game</Nav.Link>
                                <Nav.Link as={ Link } to={`${url}/edit-game`}>Edit game</Nav.Link>
                                <Nav.Link as={ Link } to={`${url}/delete-game`}>Delete game</Nav.Link>

                                <Nav.Link>⚔</Nav.Link>

                                <Nav.Link as={ Link } to={`${url}/upload-character`}>Upload character</Nav.Link>
                                <Nav.Link as={ Link } to={`${url}/edit-character`}>Edit character</Nav.Link>
                                <Nav.Link as={ Link } to={`${url}/delete-character`}>Delete character</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

            
                    <Switch>
                        <Route exact path={`${path}/`}>
                            <Row>
                                <Col xs={ 12 } >
                                    <img id="admin-banner" src={ require("../assets/images/banner.gif").default} alt="header"/>
                                </Col>
                            </Row>
                        </Route>

                        <section id="admin-container">
                            <GameProvider>
                                <Route path={`${path}/upload-game`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 } sm={ 6 } md={ 3 } lg={ 3 } xl={ 3 }>
                                            <CreateGame></CreateGame>
                                        </Col>
                                        <Col xs={ 12 } sm={ 6 } md={ 9 } lg={ 9 } xl={ 9 }>
                                            <GameList></GameList>
                                        </Col>
                                    </Row>
                                </Route>
                                <Route path={`${path}/edit-game`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 } sm={ 3 } md={ 3 } lg={ 3 } xl={ 3 }>
                                            <GameUpdate></GameUpdate>
                                        </Col>
                                        <Col xs={ 12 } sm={ 9 } md={ 9 } lg={ 9 } xl={ 9 }>
                                            <AdminGameList></AdminGameList>
                                        </Col>
                                    </Row>
                                </Route>
                                <Route path={`${path}/delete-game`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 }>
                                            <DeleteGames></DeleteGames>
                                        </Col>
                                    </Row>
                                </Route>
                            </GameProvider>

                            <CharacterProvider>
                                <Route path={`${path}/upload-character`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 } xl={ 3 }>
                                            <CreateCharacter></CreateCharacter>
                                        </Col>
                                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 9 } xl={ 9 }>
                                            <CharacterList></CharacterList>
                                        </Col>
                                    </Row>
                                </Route>
                                <Route path={`${path}/edit-character`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 } xl={ 3 }>
                                            <CharacterUpdate></CharacterUpdate>
                                        </Col>
                                        <Col xs={ 12 } sm={ 6 } md={ 6 } lg={ 9 } xl={ 9 }>
                                            <AdminCharacterList></AdminCharacterList>
                                        </Col>
                                    </Row>
                                </Route>
                                <Route path={`${path}/delete-character`}>
                                    <Row id="admin-wrapper">
                                        <Col xs={ 12 }>
                                            <DeleteCharacter></DeleteCharacter>
                                        </Col>
                                    </Row>
                                </Route>
                            </CharacterProvider>
                        </section>
                    </Switch>
                </Col>
            </Row>
        </BrowserRouter>
    )
}

export default Admin;
import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';

import { Home } from '../views/Home';
import { Games } from '../views/Games';
import { Characters } from '../views/Characters';
import { Admin } from '../views/Admin';

import '../App.css';

{/*Websidens hovednavigasjon*/}
export const Navigation = ( props ) => {
    return (
        <header>
            <Router>
                {/*Styling og logo*/}
                <Navbar expand="sm" bg="transparent" variant="dark">
                    <Navbar.Brand as={ Link } to="/">
                        <img id="logo" src={ require("../assets/images/logo.png").default }/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    
                    {/*Lenkene*/}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={ Link } to="/">Home</Nav.Link>
                            <Nav.Link as={ Link } to="/games">Games</Nav.Link>
                            <Nav.Link as={ Link } to="/characters">Characters</Nav.Link>
                            <Nav.Link as={ Link } to="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*Komponentene en switcher til*/}
                <Switch>
                    <Route exact path="/" component= { Home }/>
                    <Route path="/games" component={ Games }/>
                    <Route path="/characters" component={ Characters }/>
                    <Route path="/admin" component={ Admin }/>
                </Switch>
                
            </Router>
        </header>
    )
}

export default Navigation;
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import We from './we';
import Me from './me';
import Contact from './contact';

const Main = () => (
<Switch>
    <Route exact path = "/" component = { LandingPage } />
    <Route path = "/we" component = { We }/>
    <Route path = "/me" component = { Me } />
    <Route path = "/contact" component = { Contact } />

</Switch>
)

export default Main;
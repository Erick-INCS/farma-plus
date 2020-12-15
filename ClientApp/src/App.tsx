import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Catalog from './components/Catalog';
import History from './components/History';
import Users from './components/Users';

import './custom.css';
import './site.css';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/history' component={History} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
    </Layout>
);

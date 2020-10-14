import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Components/Window';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import app_config from '../app_config';

const client = new ApolloClient({
    uri = `http://localhost:${app_config.SERVER_PORT}/graphql?`
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <Entry />
    </ApolloProvider>,
    document.getElementById('root'));


console.log('Loaded React.');

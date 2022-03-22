import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages imports here and possibly other components
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client ={client}>
    <Router>
      <>
      <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;

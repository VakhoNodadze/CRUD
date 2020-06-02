import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import window from 'global/window';

import { errorLink, terminatingLink } from './links';

const client = new ApolloClient({
  // ssrForceFetchDelay: 100,
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, terminatingLink]),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

export default client;

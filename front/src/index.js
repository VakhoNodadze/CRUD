import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter } from 'react-router-dom';
import App from "./App";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import * as serviceWorker from "./serviceWorker";

import './styled/fonts.scss';
import GlobalStyle from './styled/global';

import { themes, defaultTheme } from './styled/themes';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <HashRouter>
        <ThemeProvider theme={themes[defaultTheme]}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </HashRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

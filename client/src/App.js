import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>dev-rak's reading List React</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
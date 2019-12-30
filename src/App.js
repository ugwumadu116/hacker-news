import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import TopStories from './components/topStories';
import MenuBar from './components/menubar';

const client = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <MenuBar />
          <TopStories />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="main">
//       <h1>hello word</h1>
//       <BookList />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import ApolloClient from "apollo-boost";
// import { gql } from "apollo-boost";

// import BookList from './components/BookList';

// const client = new ApolloClient({
//   uri: 'https://www.graphqlhub.com/graphql'
// });
// client
//   .query({
//     query: gql`
//     {
//       hn{
//         topStories{
//           id
//           kids{
//             id
//           }
//           title
//         }
//       }
//     }
//   `
//   })
//   .then(result => console.log(result));
// function App() {
//   return (
//     <div className="main">
//       <h1>hello word</h1>
//       <BookList />
//     </div>
//   );
// }

// export default App;

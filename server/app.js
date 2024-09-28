const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const app = express();

app.use('/graphql',graphqlHTTP({

}));

app.listen(4000, () => {
   console.log('now listening for requesting on port 4000');
});
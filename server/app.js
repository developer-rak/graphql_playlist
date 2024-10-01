const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongoDB atlas
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://developer-rak:rkkalhoro6576@gqlrak.m3le9.mongodb.net/?retryWrites=true&w=majority&appName=gqlrak');
mongoose.connection.once('open', () => {
   console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql: true
}));

app.listen(4000, () => {
   console.log('now listening for requesting on port 4000');
});
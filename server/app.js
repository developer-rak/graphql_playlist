const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://developer-rak:rkkalhoro6576@gqlrak.m3le9.mongodb.net/?retryWrites=true&w=majority&appName=gqlrak');
mongoose.connection.once('open', () => {
   console.log('connected to database');
})

const app = express();

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql: true
}));

app.listen(4000, () => {
   console.log('now listening for requesting on port 4000');
});
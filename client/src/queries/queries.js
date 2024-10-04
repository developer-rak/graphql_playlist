import { gql } from "@apollo/client";

// getting books
const GET_BOOKS_QUERY = gql`
   query getBooksQuery {
      books{
         name
         genre
         id
      }
   }
`;

// getting authors
const GET_AUTHORS_QUERY = gql`
   query getAuthorsQuery {
      authors{
         name
         age
         id
      }
   }
`;

// adding book
const addBookMutation = gql`
   mutation {
      addBook(name:"", genre:"", authorId:""){
         name
         id
      }
   }
`;

export {GET_BOOKS_QUERY, GET_AUTHORS_QUERY,addBookMutation};
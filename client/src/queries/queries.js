import { gql } from "@apollo/client";

// getting books
const GET_BOOKS_QUERY = gql`
   query getBooksQuery {
      books {
         name
         genre
         id
      }
   }
`;

// getting authors
const GET_AUTHORS_QUERY = gql`
   query getAuthorsQuery {
      authors {
         name
         age
         id
      }
   }
`;

// adding book
const ADD_BOOK_MUTATION = gql`
   mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
         name
         id
      }
   }
`;

// getting a single book
const GET_BOOK_QUERY = gql`
   query GetBook($id: ID!) {
      book(id: $id) {
         id
         name
         genre
         author {
            id
            name
            age
            books {
               name
               id
            }
         }
      }
   }
`;

/*
const GET_BOOK_QUERY = gql`
   query GetBookQuery($id: ID!) {
      book(id: $id) {
         id
         name
         genre
         author {
            id
            name
            age
            books {
               name
               id
            }
         }
      }
   }
`;
*/

export {GET_BOOKS_QUERY, GET_AUTHORS_QUERY, ADD_BOOK_MUTATION, GET_BOOK_QUERY};
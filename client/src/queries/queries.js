import { gql } from "@apollo/client";


const GET_BOOKS_QUERY = gql`
   query getBooksQuery {
      books{
         name
         genre
         id
      }
   }
`;

const GET_AUTHORS_QUERY = gql`
   query getAuthorsQuery {
      authors{
         name
         age
         id
      }
   }
`;

export {GET_BOOKS_QUERY, GET_AUTHORS_QUERY};
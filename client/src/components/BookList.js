import React from "react";
import { useQuery, gql } from "@apollo/client";
// import { graphql } from 'react-apollo';

/*
const getBooksQuery = gql`
   {
      books{
         name
         id
      }
   }
`
*/

const GET_BOOKS_QUERY = gql`
   query getBooksQuery {
      books{
         name
         id
      }
   }
`;

function BookList() {
   const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
   if(loading) return <p>Loading...</p>;
   if(error) return <p>Error: {error.message}</p>;
   
   return data.books.map(({name, id}) =>(
     <div key={id}>
       <ul id="book-list">
         <li>Book Name</li>
         <li>2{name}</li>
         <p>{id}</p>
       </ul>
     </div>
   ));
 }
 //graphql(getBooksQuery)
 export default BookList;
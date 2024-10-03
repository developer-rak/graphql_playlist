import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";
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
/*
const GET_BOOKS_QUERY = gql`
   query getBooksQuery {
      books{
         name
         genre
         id
      }
   }
`;
*/

function BookList() {
   const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
   if(loading) return <p>Loading...</p>;
   if(error) return <p>Error: {error.message}</p>;
   
   return data.books.map(({name, genre, id}) =>(
     <div key={id}>
       <ul id="book-list">
         <li>Book: {name}</li>
         <li>Gen: {genre}</li>
         {/*<li>id: {id}</li>*/}
       </ul>
     </div>
   ));
 }
 //graphql(getBooksQuery)
 export default BookList;
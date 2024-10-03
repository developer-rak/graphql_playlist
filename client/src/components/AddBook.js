import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS_QUERY = gql`
   query getAuthorsQuery {
      authors{
         name
         age
         id
      }
   }
`;

function AddBook() {
   const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
   if(loading) return <p>Loading...</p>;
   if(error) return <p>Error: {error.message}</p>;
   
   return (
      <form id="add-book">

         <div className="field">
            <label>Book Name:</label>
            <input type="text" />
         </div>

         <div className="field">
            <label>Genre:</label>
            <input type="text" />
         </div>

         <div className="field">
            <label>Author:</label>
            <select>
               <option>Select Author</option>
               {data.authors.map(author => {
                  return <option 
                           key={author.id} 
                           value={author.id}
                         >
                           {author.name}
                         </option>
               })}
            </select>
         </div>

         <button>+</button>

      </form>
   //   <div key={id}>
   //     <ul id="book-list">
   //       <li>Author: {name}</li>
   //       <li>age: {age}</li>
   //       <li>id: {id}</li>
   //     </ul>
   //   </div>
   // data.authors.map(({name, age, id}) =>
   );
 }
 //graphql(getBooksQuery)
 export default AddBook;
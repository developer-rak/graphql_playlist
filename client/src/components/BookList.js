import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
   const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
   const [selected, setSelected] = useState(null);

   if(loading) return <p>Loading...</p>;
   if(error) return <p>Error: {error.message}</p>;
   
   return (
     <div>
         <ul id="book-list">
            {data.books.map((book)=> (
               <li onClick={() => setSelected(book.id)}>{book.name}</li>
            ))}
         </ul>
         {selected 
            ? <BookDetails bookId={selected}/> 
            : <div>No Book Selected</div>
         }
      </div>
   );
 }

export default BookList;
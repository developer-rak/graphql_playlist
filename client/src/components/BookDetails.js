import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOK_QUERY } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    variables: { id: bookId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { book } = data;

  return (
    <div id="book-details">
      <h2>{book.name}</h2>
      <p>Genre: {book.genre}</p>
      <p>Author: {book.author.name}</p>
      <p>All books by this author:</p>
      <ul className='other-books'>
         {book.author.books.map(item => {
            return <li key={item.id}>{item.name}</li>
         })}
      </ul>
    </div>
  );
};

export default BookDetails;






/*
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK_QUERY } from "../queries/queries";

const BookDetails = ({ bookId }) => {
   const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
      skip: !bookId,
      variables: { id: bookId }
   });
   console.log({bookId})
   console.log(data)

   let content;
   if(loading){ content = <div>Loading...</div> }
   else if (error){ content = <p>Ops! Something went wrong</p> }
   else {
      const { name, genre, author } = data;

      const books = author.books.map(({id, name}) => {
         return <li key={id}>{name}</li>
      });

      content = (
         <div>
            <h2>{name}</h2>
            <p>{genre}</p>
            <p>{author}</p>
            <p>All Books by this author:</p>
            <ul className="other-books">
               {books}
            </ul>
         </div>
      )
   }

   return (
      <div id="book-details">
         {content}
      </div>
   );
 }

export default BookDetails;
*/
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS_QUERY, ADD_BOOK_MUTATION, GET_BOOKS_QUERY } from "../queries/queries";


function AddBook() {
   const [name, setName] = useState('');
   const [genre, setGenre] = useState('');
   const [authorId, setAuthorId] = useState('');
   const [addBook] = useMutation(ADD_BOOK_MUTATION, {
      refetchQueries: [{ query: GET_BOOKS_QUERY }],
   });

   // getting authors
   const query = useQuery(GET_AUTHORS_QUERY);

   function displayAuthors(){
      let {data, loading} = query
      if (loading) {
         return (<option disabled>Loading Authors...</option>);
      } else {
         return data.authors.map(author=> {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
         });
      }
   }

   function handleSubmit(e){
      e.preventDefault();
      addBook({ variables: {name, genre, authorId} });
      console.log({name,genre,authorId})
   }
   
   return (
      <form id="add-book" onSubmit={handleSubmit}>

         <div className="field">
            <label>Book Name:</label>
            <input type="text" onChange={e=>setName(e.target.value)} />
         </div>

         <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={e=>setGenre(e.target.value)} />
         </div>

         <div className="field">
            <label>Author:</label>
            <select onChange={e=>setAuthorId(e.target.value)} >
               <option>Select Author</option>
               {displayAuthors()}
            </select>
         </div>

         <button>+</button>

      </form>
   );
}

export default AddBook;
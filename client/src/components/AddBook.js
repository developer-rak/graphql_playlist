import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS_QUERY, addBookMutation } from "../queries/queries";


function AddBook() {
   const [name, setName] = useState('');
   const [genre, setGenre] = useState('');
   const [authorId, setAuthorId] = useState('');

   // const [addMutatin, {data, loading, error}] = useMutation(addBookMutation);

   const {loading, error, data} = useQuery(GET_AUTHORS_QUERY);
   if(loading) return <p>Loading...</p>;
   if(error) return <p>Error: {error.message}</p>;

   function handleSubmit(e){
      e.preventDefault()
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
            <select onChange={e=>setAuthorId(e.target.value)}>
               <option>Select Author</option>
               {data.authors.map(author => {
                  return <option key={author.id} value={author.id}>{author.name}</option>
               })}
            </select>
         </div>

         <button>+</button>

      </form>
   );
}

export default AddBook;
// import React, { Component } from 'react';  
  
// class App extends Component {  
//   constructor(props){  
//     super(props);  
//     this.state = {  
//          data: 'www.javatpoint.com'  
//       }  
//     this.handleEvent = this.handleEvent.bind(this);  
//   }  
//   handleEvent(){  
//     console.log(this.props);  
//   }  
//    render() {  
//       return (  
//          <div className="App">  
//             <h2>React Constructor Example</h2>  
//             <input type ="text" value={this.state.data} />  
//             <button onClick={this.handleEvent}>Please Click</button>  
//          </div>  
//       );  
//    }  
// }  
// export default App;

Using React Functional Components (as of August 15, 2020)

import React, {useState} from "react";
import { graphql } from "react-apollo";
import {getAuthorsQuery} from '../queries/queries';

function displayAuthors (props) {
    let data = props.data;
    if (data.loading) {
        return (<option disabled>Loading Authors...</option>);
    } else {
        return data.authors.map(author=> {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
        });
    }
}

function AddBook(props) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`name: ${name}, genre: ${genre}, authorId: ${authorId}`);
    }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={e=>setName(e.target.value)}/>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e=>setGenre(e.target.value)}/>
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e=>setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors(props)}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default graphql(getAuthorsQuery)(AddBook);
import React from 'react';
import  './App.css';

const books=[{
  id:1,
  title:"Life is What You Make it",
  author:"Preeti Shenoy",
  img:"https://images-na.ssl-images-amazon.com/images/I/41ekOc6O1ML._SX311_BO1,200,200,150_.jpg"
},
{
  id:2,
  title:"Think Like a Monk",
  author:"Jay Shetty",
  img:"https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
},

{ 
  id:3,
  title:"Death; An Inside Story",
  author:"Sadguru",
  img:"https://m.media-amazon.com/images/I/510p9yHSQ+L.jpg"

},
{ 
  id:4,
  title:"The Monk Who Sold His Ferrari",
  author:"Robin Sharma",
  img:"https://m.media-amazon.com/images/I/41Y2AavtfNL.jpg"

},
{ 
  id:5,
  title:"The Personal MBA",
  author:"Josh Kaufman",
  img:"https://images-na.ssl-images-amazon.com/images/I/411AhoeewjL._SX324_BO1,204,203,200_.jpg"

},
{ 
  id:6,
  title:"The Psychology of Money",
  author:"Morgan Housel",
  img:"https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"

}
];




export default  function BookList() {
  return(
  
  <section className="booklist">
    {books.map((book, index) => {
      return <Book key={book.id} {...book}></Book>
    })}

  </section>
  );

}

const Book = (props) =>{

  return (<article className = "book">
   <img src={props.img} alt={props.alt} />
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <h4>{props.children}</h4>
    </article>)
};




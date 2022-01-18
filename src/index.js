import React from 'react'
import reactDom from 'react-dom'


//CSS
import './index.css'

//setup vars
const books = [

  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García"
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51GCJ4sNgpL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: "Grandparents' Bag of Stories",
    author: "Sudha Murty "
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg',
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki"
  }
];

// const names = ["mayank", "raj", "hari"]
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// })

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {

        return (
          <Book key={book.id} {...book}></Book>

        );
      })}

    </section>
  );
}



const Book = (props) => {
  const { img, author, title } = props;
  // console.log(props)
  return (
    <article className='book'>
      <img
        src={img}
        alt="book img"
      />
      <h1>{title} </h1>
      <h3 >{author} </h3>

    </article>);
}

// const Image = () => <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg" alt="book img" />
// const Title = () => <h1>Ikigai: The Japanese secret to a long and happy life </h1>
// const Author = () => <h3 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>Héctor García</h3>


reactDom.render(<BookList />, document.getElementById("root"))
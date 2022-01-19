import React from 'react'
import reactDom from 'react-dom'

import { books } from './books'
import { Book } from './book'
//CSS
import './index.css'



//error during npm run bouild
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;

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





// const Image = () => <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg" alt="book img" />
// const Title = () => <h1>Ikigai: The Japanese secret to a long and happy life </h1>
// const Author = () => <h3 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>Héctor García</h3>


reactDom.render(<BookList />, document.getElementById("root"))
import { useState } from "react";
import "../../App.css";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ])

  const [newBook, setNewBook] = useState({ title: "", author: "" })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({...prevBook, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newBook.title.trim() === "" || newBook.author.trim() === "") {
      alert("Please fill in both fields!");
      return
    }

    setBooks([...books, newBook])
    setNewBook({ title: "", author: "" })
  }
  
  return (
    <div className="bookshelfDiv">
      {
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Enter book title"
          />

          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Enter author name"
          />

          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
      }

      {
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Bookshelf;
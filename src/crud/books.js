import React, { useState } from "react";
import "./BookForm.css";

const BookForm = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    nama: "",
    author: "",
    deskripsi: "",
    harga: "0",
  });

  const [displayedValue, setDisplayedValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data Buku:", book);

    setBooks([...books, book]);

    const bookInfo = `Nama: ${book.nama}, Penulis: ${book.author}, Deskripsi: ${book.deskripsi}, Harga: ${book.harga}`;

    setDisplayedValue(bookInfo);

    setBook({
      nama: "",
      author: "",
      deskripsi: "",
      harga: "",
    });
  };

  const handleEdit = (index) => {
    const editedBook = books[index];

    setBook({
      nama: editedBook.nama,
      author: editedBook.author,
      deskripsi: editedBook.deskripsi,
      harga: editedBook.harga,
    });

    // Remove the edited book from the books array
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);

    setDisplayedValue(""); // Clear displayed value
  };

  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);

    setDisplayedValue(""); // Clear displayed value
  };

  return (
    <div className="book-form-container">
      <h2>Formulir Buku</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama Buku:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={book.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Penulis:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi:</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={book.deskripsi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="harga">Harga:</label>
          <input
            type="number"
            id="harga"
            name="harga"
            value={book.harga}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Tambah Buku</button>
      </form>
      {displayedValue && (
        <div className="info-container">
          <h3>Daftar buku baru:</h3>
          <p>{displayedValue}</p>
        </div>
      )}

      {books.length > 0 && (
        <div className="book-list-container">
          <h3>Daftar Buku:</h3>
          <ul>
            {books.map((b, index) => (
              <li key={index}>
                {`Nama: ${b.nama}, Penulis: ${b.author}, Deskripsi: ${b.deskripsi}, Harga: ${b.harga}`}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Hapus</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookForm;

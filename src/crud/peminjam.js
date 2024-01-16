import React, { useState } from "react";
import "./BorrowForm.css";

const BorrowForm = () => {
  const [borrows, setBorrows] = useState([]);
  const [borrow, setBorrow] = useState({
    borrowerName: "",
    borrowedBook: "",
    borrowDate: "",
    returnDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBorrow({
      ...borrow,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data Peminjaman:", borrow);

    setBorrows([...borrows, borrow]);

    setBorrow({
      borrowerName: "",
      borrowedBook: "",
      borrowDate: "",
      returnDate: "",
    });
  };

  return (
    <div className="borrow-form-container">
      <h2>Formulir Peminjaman</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="borrowerName">Nama Peminjam:</label>
          <input
            type="text"
            id="borrowerName"
            name="borrowerName"
            value={borrow.borrowerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="borrowedBook">Nama Buku:</label>
          <input
            type="text"
            id="borrowedBook"
            name="borrowedBook"
            value={borrow.borrowedBook}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="borrowDate">Tanggal Peminjaman:</label>
          <input
            type="date"
            id="borrowDate"
            name="borrowDate"
            value={borrow.borrowDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Tanggal Pengembalian:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={borrow.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Tambah Peminjaman</button>
      </form>

      {borrows.length > 0 && (
        <div className="info-container">
          <h3>Daftar Peminjaman:</h3>
          <ul className="borrow-list-container">
            {borrows.map((item, index) => (
              <li key={index}>
                {`Peminjam: ${item.borrowerName}, Buku: ${item.borrowedBook}, Tanggal Pinjam: ${item.borrowDate}, Tanggal Kembali: ${item.returnDate}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BorrowForm;

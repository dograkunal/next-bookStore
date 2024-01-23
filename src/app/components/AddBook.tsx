"use client";

import { useState } from "react";

const AddBook = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const handleSubmitNewBook = (e) => {
    e.preventDefault();
    const res = await fetch(`/api/books/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        link: "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/",
        img: "https://m.media-amazon.com/images/I/51vSKwpp1ML._SL1360_.jpg",
      }),
    });
    if (res.ok) {
      setNewBookTitle("");
      setModalOpen(false);
    }
  };
  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${
          modalOpen ? "modal-open" : ""
        } bg-slate-400 text-slate-900`}
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            onClick={() => setModalOpen(false)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <input
            type="text"
            placeholder="Enter New Book Title"
            className="input input-bordered w-full max-w-xs"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
};
export default AddBook;

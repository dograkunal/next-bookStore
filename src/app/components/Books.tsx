"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "../loading";
import AddBook from "./AddBook";

async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
}
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/books/search?query=${query}`);
    const books = await res.json();
    setBooks(books);
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex m-4 flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input input-bordered text-slate-900 w-full max-w-xs mr-2 "
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <AddBook />
      </div>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <div key={book.id} className=" m-4">
            <div className="card w-96 bg-base-100 h-120 text-slate-800 shadow-xl p-4">
              <figure className="min-h-65 max-h-65">
                <img alt="image" src={book.img} width="200" height="246" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.id}</h2>
                <p className="min-h-24 max-h-24">{book.title}</p>
                <div className="card-actions justify-end">
                  <Link href={book.link} className="btn btn-primary">
                    See in Amazon
                  </Link>
                  <button className="btn btn-error">Delete</button>
                </div>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

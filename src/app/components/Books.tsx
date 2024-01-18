import Image from "next/image";
import Link from "next/link";
async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
}
const Books = async () => {
  const books = await getBooks();
  return (
    <div className="flex flex-wrap">
      {books.map((book) => (
        <div key={book.id} className=" m-4">
          <div className="card w-96 bg-base-100 h-120 text-slate-800 shadow-xl p-4">
            <figure className="min-h-65 max-h-65">
              <img alt="image" src={book.img} width="200" height="120" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.id}</h2>
              <p>{book.title}</p>
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
  );
};

export default Books;

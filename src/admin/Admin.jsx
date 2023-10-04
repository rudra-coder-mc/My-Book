import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [bookDetail, setBookDetail] = useState({
    book_image: "",
    book_name: "",
    author_name: "",
    category: "",
    price: "",
    description: "",
  });
  const [bookCat, setBookCat] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");

  const hendelCat = (e) => {
    setSelectedCat(e.target.value);
  };
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/bookData", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[1]);

    setBookCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  const hendelAdd = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/AddBook", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_image: bookDetail.book_image,
        book_name: bookDetail.book_name,
        author_name: bookDetail.author_name,
        category: selectedCat,
        price: bookDetail.price,
        description: bookDetail.description,
      }),
    });
    const json = await response.json();

    if (!json.NewBook) {
      alert("enter valid detail");
    }
    if (json.NewBook) {
      setBookDetail({
        book_image: "",
        book_name: "",
        author_name: "",
        category: "",
        price: "",
        description: "",
      });
    }
  };
  const hendelUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/UpdateBook", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_image: bookDetail.book_image,
        book_name: bookDetail.book_name,
        author_name: bookDetail.author_name,
        category: selectedCat,
        price: bookDetail.price,
        description: bookDetail.description,
      }),
    });
    const json = await response.json();

    if (!json.UpdateBook) {
      alert("enter valid detail");
    }
    if (json.UpdateBook) {
      setBookDetail({
        book_image: "",
        book_name: "",
        author_name: "",
        category: "",
        price: "",
        description: "",
      });
    }
  };
  const hendelDelete = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/DeleteBook", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_name: bookDetail.book_name,
      }),
    });
    const json = await response.json();

    if (!json.DeleteBook) {
      alert("enter valid detail");
    }
    if (json.DeleteBook) {
      setBookDetail({
        book_image: "",
        book_name: "",
        author_name: "",
        category: "",
        price: "",
        description: "",
      });
    }
  };
  const chang = (event) => {
    setBookDetail({ ...bookDetail, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="container w-50 ">
        <h4 className="h4 my-3 fw-normal text-center">Add New Book</h4>
        <form>
          <div className="form-floating mt-4">
            <input
              type="text"
              className="form-control"
              id="book_image"
              placeholder="John doe"
              name="book_image"
              value={bookDetail.book_image}
              onChange={chang}
            />
            <label htmlFor="book_image">book_image</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="text"
              className="form-control"
              id="book_name"
              placeholder="John doe"
              name="book_name"
              value={bookDetail.book_name}
              onChange={chang}
            />
            <label htmlFor="book_name">book_name</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="text"
              className="form-control"
              id="author_name"
              placeholder="John doe"
              name="author_name"
              value={bookDetail.author_name}
              onChange={chang}
            />
            <label htmlFor="author_name">author_name</label>
          </div>
          <div className="form-floating mt-4">
            {bookCat ? (
              <>
                <select
                  name="catSelecter"
                  id="select1"
                  className="form-control"
                  onChange={hendelCat}
                >
                  {bookCat.map((data) => (
                    <option
                      className="form-control"
                      value={data.category}
                      key={data._id}
                    >
                      {data.category}
                    </option>
                  ))}
                </select>
                <label htmlFor="catSelecter">category</label>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="form-floating mt-4">
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="John doe"
              name="price"
              value={bookDetail.price}
              onChange={chang}
            />
            <label htmlFor="price">price</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="John doe"
              name="description"
              value={bookDetail.description}
              onChange={chang}
            />
            <label htmlFor="description">description</label>
          </div>
          <div className="d-flex justify-content-center my-5">
            <button className="btn btn-success mx-3 " onClick={hendelAdd}>
              Add BOOk
            </button>
            <button className="btn btn-success mx-3" onClick={hendelUpdate}>
              Update BOOk
            </button>
            <button className="btn btn-success" onClick={hendelDelete}>
              Delete BOOk
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};
export default Admin;

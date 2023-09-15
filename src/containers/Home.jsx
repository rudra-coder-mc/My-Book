import Carousele from "../components/Carousel";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
const Home = () => {
  const [bookCat, setBookCat] = useState([]);
  const [bookItem, setBookItem] = useState([]);
  const [catFilter, setCatFilter] = useState("all");
  const [search, setSearch] = useState("");
  const loadData = async () => {
    var response = await fetch("http://localhost:5000/api/bookData", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0]);
    setBookItem(response[0]);
    setBookCat(response[1]);
  };
  useEffect(() => {
    loadData();
    console.log("data");
  }, []);

  const hendelCatagory = (e) => {
    setCatFilter(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Carousele />

      <div className="container">
        {bookCat !== [] ? (
          <div className="d-flex ">
            <select
              name="catSelecter"
              id="select1"
              className=" rounded"
              onChange={hendelCatagory}
            >
              {bookCat.map((data) => (
                <option key={data._id}>{data.category}</option>
              ))}
            </select>
            <div className="input-group rounded ps-5 ">
              <input
                type="search"
                className=" rounded "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <span
                className="input-group-text border-0 rounded"
                id="search-addon"
              >
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        <hr />
        <h4>{catFilter}</h4>
        <hr />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ">
          {bookItem !== []
            ? catFilter === "all"
              ? bookItem
                  .filter((item) =>
                    item.book_name.toLowerCase().includes(search)
                  )
                  .map((filterItems) => (
                    <div key={filterItems._id}>
                      <Card bookItems={filterItems}></Card>
                    </div>
                  ))
              : bookItem
                  .filter(
                    (item) =>
                      item.category === catFilter &&
                      item.book_name.toLowerCase().includes(search)
                  )
                  .map((filterItems) => (
                    <div key={filterItems._id}>
                      <Card bookItems={filterItems}></Card>
                    </div>
                  ))
            : ""}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;

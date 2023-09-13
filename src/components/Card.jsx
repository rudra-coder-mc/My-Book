import { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const [orderCount, setOrderCount] = useState(1);
  let bookItem = props.bookItems;
  let dispatch = useDispatchCart();
  let data = useCart();
  let navigate = useNavigate();

  const handelOrder = async () => {
    let book = [];
    for (const item of data) {
      if (item.id === bookItem._id) {
        book = item;
        break;
      }
    }
    console.log(book);
    console.log(new Date());
  
    if (book !== []) {
      if (book.Quantity === orderCount) {
        await dispatch({
          type: "UPDATE",
          id: bookItem._id,
          price: totalPrice,
          Quantity: orderCount,
        });
        return;
      } else if (book.Quantity !== orderCount) {
        await dispatch({
          type: "ADD",
          id: bookItem._id,
          book_name: bookItem.book_name,
          book_image: bookItem.book_image,
          author_name: bookItem.author_name,
          price: totalPrice,
          Quantity: orderCount,
          category: bookItem.category,
        });
        console.log("Quantity different so simply ADD one more to the list");
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: bookItem._id,
      book_image: bookItem.book_image,
      book_name: bookItem.book_name,
      author_name: bookItem.author_name,
      price: totalPrice,
      Quantity: orderCount,
      category: bookItem.category,
    });
    console.log(data);
    // setOrderCount(1);
  };

  const handleClick = (e) => {
    if (e.target.name === "+") {
      setOrderCount((orderCount) => orderCount + 1);
    } else {
      if (orderCount === 1) {
        setOrderCount(1);
      } else {
        setOrderCount((orderCount) => orderCount - 1);
      }
    }
  };

  let totalPrice = parseFloat(bookItem.price) * orderCount;

  return (
    <div className="col">
      <div className="card h-40 bg-image ">
        <img
          src={bookItem.book_image}
          className="card-img-top "
          alt={bookItem.book_name}
          style={{ height: "320px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{bookItem.book_name}</h5>
          <h6 className="font-weight-bold">
            Author name: {bookItem.author_name}
          </h6>
          <h6 className="font-weight-bold">Categoty: {bookItem.category}</h6>
          <h6 className="font-weight-bold">price: {totalPrice}</h6>
          <p className="card-text ">{bookItem.description}</p>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-md btn-outline-secondary "
                onClick={handleClick}
                name="+"
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-md btn-outline-secondary"
                value="-"
                onClick={handleClick}
                name="-"
              >
                -
              </button>
            </div>
            <small className="font-weight-bold">{orderCount}</small>
            <button className="btn btn-primary " onClick={handelOrder}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

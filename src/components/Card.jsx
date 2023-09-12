import { useState } from "react";

const Card = (props) => {
  const [orderCount, setOrderCount] = useState(1);
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
  return (
    <div className="col">
      <div className="card h-40 bg-image ">
        <img
          src={props.bookImage}
          className="card-img-top "
          alt={props.bookName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.bookName}</h5>
          <h6 className="font-weight-bold">Author name: {props.authorName}</h6>
          <h6 className="font-weight-bold">Categoty: {props.Categoty}</h6>
          <h6 className="font-weight-bold">price: {props.Price}</h6>
          <p className="card-text ">{props.Description}</p>

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
            <button className="btn btn-primary ">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

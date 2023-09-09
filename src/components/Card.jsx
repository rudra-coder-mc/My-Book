import { useState } from "react";

const Card = () => {
  const [orderCount, setOrderCount] = useState(1);
  const handleClick = (e) => {
    if(e.target.name === "+"){
        setOrderCount((orderCount) => orderCount + 1)
    }
    else{
        if(orderCount===1){
            setOrderCount(1)
        }
        else{
            setOrderCount((orderCount) => orderCount - 1);
        }
    }
    
  };
  return (
    <div className="m-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 ">
        <div className="col">
          <div
            className="card h-100 bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top "
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
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
      </div>
    </div>
  );
};
export default Card;
